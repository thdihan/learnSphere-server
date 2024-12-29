import { TNote } from './notes.interface';
import { NoteModel } from './notes.model';

const createNoteInDB = async (note: TNote) => {
    const newNote = await NoteModel.create(note);

    return newNote;
};

export const NotesService = {
    createNoteInDB,
};
