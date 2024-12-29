import express from 'express';
// import validateRequest from '../../middlewares/validateRequest';
import { upload } from '../../utils/fileUploadToCloudinary';
import { NotesController } from './notes.controller';
import { fileProcessor } from '../../middlewares/fileProcessor';

const router = express.Router();

router.post(
    '/create/:userId',
    upload.array('file'),
    fileProcessor,
    NotesController.createNote,
);

export const NotesRoute = router;
