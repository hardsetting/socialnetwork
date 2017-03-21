export class Friendship {
    static readonly STATUS_NOT_FRIENDS = 'not_friend';
    static readonly STATUS_REQUESTED = 'requested';
    static readonly STATUS_RECEIVED = 'received';
    static readonly STATUS_FRIENDS = 'friends';

    requester_user_id: number;
    requested_user_id: number;
    created_at: string;
    accepted_at: string;

    private user_id: number;

    constructor(data: any, user_id: number) {
        Object.assign(this, data);
        this.user_id = user_id;
    }

    get status(): string {
        if (this.accepted_at != null) {
            return Friendship.STATUS_FRIENDS;
        } else if (this.user_id == this.requester_user_id) {
            return Friendship.STATUS_REQUESTED;
        } else if (this.user_id == this.requested_user_id) {
            return Friendship.STATUS_RECEIVED;
        }

        return Friendship.STATUS_NOT_FRIENDS;
    }

    get isFriends(): boolean {
        return this.status == Friendship.STATUS_FRIENDS;
    }

    get isRequested(): boolean {
        return this.status == Friendship.STATUS_REQUESTED;
    }

    get isReceived(): boolean {
        return this.status == Friendship.STATUS_RECEIVED;
    }
}