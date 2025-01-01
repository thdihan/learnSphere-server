import { GoogleGenerativeAI } from '@google/generative-ai';
import config from '../../config';
import { examplePrompt } from './quiz.utils';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { DataAPIClient } from '@datastax/astra-db-ts';

const genAI = new GoogleGenerativeAI(config.google_api_key as string);
export const embeddingModel = genAI.getGenerativeModel({
    model: 'text-embedding-004',
});

const client = new DataAPIClient(config.astra_db_application_token as string);
export const vectorDB = client.db(config.astra_db_api_endpoint as string, {
    namespace: config.astra_db_namespace as string,
});
const generateQuizByAI = async (message: string) => {
    console.log('[Embedding Message]...');
    const embeddedMessage = await embeddingModel.embedContent(message);

    const collection = await vectorDB.collection(
        config.astra_db_collection as string,
    );
    const cursor = await collection.find(
        {},
        {
            sort: {
                $vector: embeddedMessage.embedding.values,
            },
            limit: 10,
        },
    );

    const documents = await cursor.toArray();
    const docsMap = documents.map((doc) => doc.text);
    const docContext = JSON.stringify(docsMap);

    const template = {
        role: 'system',
        content: `
                You are an AI assistant who knows a lot of information and can create quiz question along with options & answers. Use the below context to augment what you know more specifically to create quiz question. The context will provide you with the most recent page data from the web.

                If the context doesn't include the information you need answer based on your existing knowledge and don't mention the source of your information or what the context does or does not include.
                Format responses using markdown where applicable and don't return images.

                ------------------------------
                START CONTEXT
                ${docContext}
                END CONTEXT
                ------------------------------

                Also few example of quizes are given below for your reference. Follow the reference pattern to generate quiz questions. At the end the end please generate a json object as response.

                START QUIZ FORMAT
                ${examplePrompt}
                END QUIZ FORMAT

                -----------------------------
                QUESTION: ${message}
                ------------------------------
            `,
    };

    // Also a format of quizes format is given below for your reference. Follow the same format to generate quiz questions.
    console.log('[Template]: ', template);
    console.log('[Message] : ', message);

    console.log('[Querying Generative AI]...');
    const chatModel = new ChatGoogleGenerativeAI({
        model: 'gemini-pro',
        maxOutputTokens: 2048,
    });
    console.log('[Generating Response]...');
    // const response = await chatModel.invoke([template, ...messages]);
    const response = await chatModel.invoke([template, message]);
    // const response = await streamText({
    //     model: google("gemini-pro"),
    //     messages: [template, ...messages],
    //     temperature: 0.7,
    // });
    console.log('[Response]: ', response.content);
    return response.content;
};

export const QuizService = {
    generateQuizByAI,
};
