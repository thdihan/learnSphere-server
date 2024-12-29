import { Types } from 'mongoose';

export type TNote = {
    title: string;
    files: TFile[];
    content?: string;
    owner: Types.ObjectId | string;
};

export type TFile = {
    fileName: string;
    fileType: 'image' | 'application';
    fileExtension: 'jpg' | 'png' | 'pdf';
    fileUrl: string;
};
