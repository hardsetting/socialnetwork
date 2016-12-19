import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UserService} from "../shared/user.service";

import {User} from "../models/user";
import {Post} from "../models/post";

import {PostService} from "../shared/post.service";
import {Observable} from "rxjs/Observable";

@Component({
    moduleId: module.id,
    selector: 'sn-profile',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    providers: [
        UserService,
        PostService
    ]
})
export class LoginComponent implements OnInit {

    constructor(

    ) {}

    ngOnInit(): void {

    }
}