import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Post} from "app/models/post";
import {PostService} from "app/shared/post.service";
import {User} from "app/models/user";

@Component({
    moduleId: module.id,
    selector: 'sn-post',
    templateUrl: 'post.component.html',
    styleUrls: ['post.component.css']
})
export class PostComponent {
    @Input() user: User;
    @Input() post: Post;
    @Output() onDelete = new EventEmitter<Post>();

    showOptions: boolean = false;

    constructor(private postService: PostService) {}

    toggleOptions(): void {
        this.showOptions = !this.showOptions;
    }

    edit(): void {
        this.toggleOptions();
    }

    delete(): void {
        this.toggleOptions();
        this.postService.delete(this.post.id).subscribe(() => {
            this.onDelete.emit(this.post);
        });
    }
}