export class Notification {
    id: number;
    user_id: number;
    type: number;
    data: any;
    created_at: string;
    read_at: string;

    constructor(data: any) {
        Object.assign(this, data);
    }
}
