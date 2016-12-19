import {Upload} from "./upload";
import {Post} from "./post";

export class User {
    id: number;
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

    profile_picture?: Upload;
    posts?: Post[]
}