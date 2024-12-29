import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { NotesService } from './notes.service';

const createNote = catchAsync(async (req, res) => {
    const newNote = await NotesService.createNoteInDB(req.body);
    NotesService.addNotesIntoVectorDatabase(newNote);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Note created successfully',
        data: newNote,
    });
});

const getNotes = catchAsync(async (req, res) => {
    const notes = await NotesService.getNotesFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Notes Fetched successfully',
        data: notes,
    });
});

const getNoteById = catchAsync(async (req, res) => {
    const note = await NotesService.getNoteByIdFromDB(req.params.id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Note Fetched successfully',
        data: note,
    });
});

const updateNote = catchAsync(async (req, res) => {
    const updatedNote = await NotesService.updateNoteInDB(
        req.params.id,
        req.body,
    );

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Note updated successfully',
        data: updatedNote,
    });
});

const createCollection = catchAsync(async (req, res) => {
    await NotesService.createCollection();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Collection created successfully',
        data: null,
    });
});
export const NotesController = {
    createNote,
    getNotes,
    getNoteById,
    updateNote,
    createCollection,
};
