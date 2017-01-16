import {User} from "app/models/user";
import {Post} from "app/models/post";

export class Reaction {
    static readonly VALUE_LIKE = 'like';
    static readonly VALUE_LAUGH = 'laugh';
    static readonly VALUE_LOVE = 'love';

    id: number;
    post_id: number;
    user_id: number;
    value: string;
    created_at: string;
    modified_at: string;

    user?: User;
    post?: Post;

    constructor(data: any) {
        Object.assign(this, data);
    }

    get isLike() { return this.value == Reaction.VALUE_LIKE; }
    get isLove() { return this.value == Reaction.VALUE_LOVE; }
    get isLaugh() { return this.value == Reaction.VALUE_LAUGH; }
}