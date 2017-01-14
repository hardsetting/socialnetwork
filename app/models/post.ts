import {User} from "./user";
import {Reaction} from "app/models/reaction";
export class Post {
    id: number;
    creator_user_id: number;
    content: string;
    created_at: string;
    updated_at: string;

    creator_user?: User;
    reactions?: Reaction[];

    constructor(content: string) {
        this.content = content;
    }
}