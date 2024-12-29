import { Schema, model } from 'mongoose';
import { TFile, TNote } from './notes.interface';

const FileSchema = new Schema<TFile>({
    fileName: { type: String, required: true },
    fileType: { type: String, required: true, enum: ['image', 'application'] },
    fileExtension: {
        type: String,
        required: true,
        enum: ['jpg', 'png', 'pdf'],
    },
    fileUrl: { type: String, required: true },
});

const NoteSchema = new Schema<TNote>({
    title: { type: String, required: true },
    files: [{ type: FileSchema, required: true }],
    content: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});
export const NoteModel = model<TNote>('Note', NoteSchema);
