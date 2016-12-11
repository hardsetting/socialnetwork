import {Component, OnInit, Input} from '@angular/core';
import {Post} from "../../post/post";

@Component({
    moduleId: module.id,
    selector: 'sn-post',
    templateUrl: 'post.component.html',
    styleUrls: ['post.component.css']
})
export class PostComponent implements OnInit {
    @Input() post: Post;

    showOptions: boolean = false;

    ngOnInit(): void {

    }

    toggleOptions(): void {
        this.showOptions = !this.showOptions;
    }

    edit(): void {
        this.toggleOptions();
    }

    delete(): void {
        this.toggleOptions();
    }
}