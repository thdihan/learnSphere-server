import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { NotesService } from './notes.service';
// import { sendFileToCloudinary } from '../../utils/fileUploadToCloudinary';

const createNote = catchAsync(async (req, res) => {
    const newNote = await NotesService.createNoteInDB(req.body);
    // console.log('[REQ FILE] : ', req.files);
    // console.log('[REQ BODY] : ', req.body);

    // sendFileToCloudinary();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User logged in successfully',
        data: newNote,
    });
});

export const NotesController = {
    createNote,
};
