export class Post {
    id: number;
    creator_user_id: number;
    content: string;
    created_at: string;
    updated_at: string;

    constructor(creatorUserId: number, content: string) {
        this.creator_user_id = creatorUserId;
        this.content = content;
    }
}