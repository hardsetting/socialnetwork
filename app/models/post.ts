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

    constructor(data: string|any) {
        if (data instanceof Object) {
            Object.assign(this, data);
            if (this.reactions instanceof Array) {
                this.reactions = this.reactions.map(reaction => new Reaction(reaction));
            }
        } else {
            this.content = data;
        }
    }
}