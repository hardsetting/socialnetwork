import {Component, Input, Output, EventEmitter} from '@angular/core';

import {User} from "../../user/user";

import {PostService} from "../../shared/post.service";
import {Post} from "../../post/post";

@Component({
    moduleId: module.id,
    selector: 'sn-new-post',
    templateUrl: 'new-post.component.html',
    styleUrls: ['new-post.component.css'],
    providers: [PostService]
})
export class NewPostComponent {

    @Input() user: User;
    @Output() onPost = new EventEmitter<Post>();

    content: string;
    submitting: boolean = false;

    constructor(
        private postService: PostService
    ) {}

    create(): void {
        this.submitting = true;

        this.postService.create(this.user.id, this.content)
            .subscribe(
                post => {
                    this.onPost.emit(post);
                    this.submitting = false;

                    // Reset new post content
                    this.content = "";
                },
                err => console.log("error posting")
            );
    }
}