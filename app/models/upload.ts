import {User} from "./user";
export class Upload {
    id: number;
    uuid: string;
    category: string;
    uploader_user_id: number;
    uploaded_at: string;

    url: string;

    uploader_user?: User;
}