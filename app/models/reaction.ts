import {User} from "app/models/user";
import {Post} from "app/models/post";
export class Reaction {
    id: number;
    post_id: number;
    user_id: number;
    value: string;
    created_at: string;
    modified_at: string;

    user?: User;
    post?: Post;
}