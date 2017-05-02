import {Upload} from "./upload";
import {Post} from "./post";
import {Friendship} from "app/models/friendship";

export class User {
    id: number;
    username: string;
    name: string;
    surname: string;

    status: number;
    gender: number;
    major: number;
    minor: number;
    dorm: number;
    year: number;
    high_school: number;

    profile_picture_id: number;

    posts_count: number;
    friends_count: number;

    profile_picture?: Upload;
    posts?: Post[];

    friendship?: Friendship;
}