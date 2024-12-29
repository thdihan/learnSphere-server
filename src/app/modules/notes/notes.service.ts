import { VectorDatabase } from '../../utils/vectorDatabase';
import { TNote } from './notes.interface';
import { NoteModel } from './notes.model';

const createNoteInDB = async (note: TNote) => {
    const newNote = await NoteModel.create(note);

    return newNote;
};

const getNotesFromDB = async () => {
    const notes = await NoteModel.find();
    return notes;
};

const getNoteByIdFromDB = async (id: string) => {
    const note = await NoteModel.findById(id);
    return note;
};

const updateNoteInDB = async (id: string, note: TNote) => {
    const updatedNote = await NoteModel.findByIdAndUpdate(id, note, {
        new: true,
    });

    return updatedNote;
};

const addNotesIntoVectorDatabase = async (note: TNote) => {
    await VectorDatabase.loadDataIntoDB(note.content as string);
};

const createCollection = async () => {
    await VectorDatabase.createCollection();
};
export const NotesService = {
    createNoteInDB,
    getNotesFromDB,
    getNoteByIdFromDB,
    updateNoteInDB,
    addNotesIntoVectorDatabase,
    createCollection,
};
