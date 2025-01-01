const quizExamples = [
    {
        question: 'What is the capital of France?',
        options: [
            { optionId: 1, text: 'Berlin' },
            { optionId: 2, text: 'Madrid' },
            { optionId: 3, text: 'Paris' }, // Correct
            { optionId: 4, text: 'Rome' },
        ],
        correctAnswer: 3,
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: [
            { optionId: 1, text: 'Earth' },
            { optionId: 2, text: 'Mars' }, // Correct
            { optionId: 3, text: 'Jupiter' },
            { optionId: 4, text: 'Venus' },
        ],
        correctAnswer: 2,
    },
    {
        question: 'What is the largest ocean on Earth?',
        options: [
            { optionId: 1, text: 'Atlantic Ocean' },
            { optionId: 2, text: 'Indian Ocean' },
            { optionId: 3, text: 'Arctic Ocean' },
            { optionId: 4, text: 'Pacific Ocean' }, // Correct
        ],
        correctAnswer: 4,
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: [
            { optionId: 1, text: 'William Shakespeare' }, // Correct
            { optionId: 2, text: 'Charles Dickens' },
            { optionId: 3, text: 'Mark Twain' },
            { optionId: 4, text: 'Jane Austen' },
        ],
        correctAnswer: 1,
    },
    {
        question: 'What is the chemical symbol for water?',
        options: [
            { optionId: 1, text: 'H2O' }, // Correct
            { optionId: 2, text: 'O2' },
            { optionId: 3, text: 'CO2' },
            { optionId: 4, text: 'HO' },
        ],
        correctAnswer: 1,
    },
];

// export const examplePrompt = quizExamples
//     .map((quiz, index) => {
//         return `
//         Question-${index + 1}: ${quiz.question}
//         Options:
//             ${quiz.options.map((option) => {
//                 return `
//                 Option-${option.optionId}: ${option.text}
//                 `;
//             })}
//         Correct Answer: ${quiz?.options.find((option) => option.optionId === quiz.correctAnswer)?.text}
//     `;
//     })
//     .join('\n');

export const examplePrompt = JSON.stringify(quizExamples);
