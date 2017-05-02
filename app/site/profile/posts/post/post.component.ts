import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {Post} from "app/models/post";
import {PostService} from "app/shared/post.service";
import {User} from "app/models/user";
import {Reaction} from "app/models/reaction";
import {AuthService} from "app/shared/auth.service";
import {Observable} from "rxjs/Observable";
import {Modal,} from "angular2-modal/plugins/vex";

@Component({
    moduleId: module.id,
    selector: 'sn-post',
    templateUrl: 'post.component.html',
    styleUrls: ['post.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {
    @Input() user: User;
    @Input() post: Post;
    @Output() onDelete = new EventEmitter<Post>();
    @Output() onReact = new EventEmitter<Post>();

    showOptions: boolean = false;

    constructor(
        private postService: PostService,
        private authService: AuthService,
        private modal: Modal
    ) {}

    //region Post
    toggleOptions(): void {
        this.showOptions = !this.showOptions;
    }

    closeOptions(): void {
        this.showOptions = false;
    }

    edit(): void {
        //this.toggleOptions();
    }

    delete(): void {
        let modal = this.modal.confirm()
            .overlayClosesOnClick(true)
            .message('Are you sure you want to delete your message?');

        modal.open()
            .then(dialog => dialog.result)
            .then(() => {
                this.toggleOptions();
                this.postService.delete(this.post.id).subscribe(() => {
                    this.onDelete.emit(this.post);
                });
            });
    }
    //endregion

    //region Reactions
    get reactions(): Reaction[] {
        return this.post.reactions as Reaction[];
    }

    reactionsUsers(limit: number): string {
        let names = this.post.reactions.map(reaction => reaction.user.name);

        if (names.length <= limit && names.length > 1) {
            return names.slice(0, limit-1).join(', ') + ' and ' + names.slice(limit-1, 1);
        } else {
            return names.slice(0, limit).join(', ');
        }
    }

    get currentReaction() {
        return this.reactions.find(reaction => reaction.user_id == this.authService.userId);
    }

    get likesCount(): number {
        return this.reactionCount(Reaction.VALUE_LIKE);
    }

    get loveCount(): number {
        return this.reactionCount(Reaction.VALUE_LOVE);
    }

    get laughsCount(): number {
        return this.reactionCount(Reaction.VALUE_LAUGH);
    }

    like(): void {
        this.react(Reaction.VALUE_LIKE);
    }

    love(): void {
        this.react(Reaction.VALUE_LOVE);
    }

    laugh(): void {
        this.react(Reaction.VALUE_LAUGH);
    }

    private reactionCount(value): number {
        return this.post.reactions
            .filter(reaction => reaction.value == value)
            .length;
    }

    private react(value: string): void {
        let isUndo = this.currentReaction && this.currentReaction.value == value;

        let response: Observable<any> = isUndo ?
            this.postService.undoReact(this.post.id) :
            this.postService.react(this.post.id, value);

        response.subscribe(() => {
            this.onReact.emit(this.post);
        });
    }
    //endregion
}