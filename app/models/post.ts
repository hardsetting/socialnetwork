import {User} from "./user";
export class Post {
    id: number;
    creator_user_id: number;
    content: string;
    created_at: string;
    updated_at: string;

    creator_user?: User;

    constructor(content: string) {
        this.content = content;
    }
}