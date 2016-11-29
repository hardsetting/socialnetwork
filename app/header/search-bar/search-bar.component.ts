import {Component} from '@angular/core';

import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

import {User} from "../../user/user";
import {UserSearchService} from "../../shared/user-search.service";

@Component({
    moduleId: module.id,
    selector: 'sn-search-bar',
    templateUrl: 'search-bar.component.html',
    styleUrls: ['search-bar.component.css'],
    providers: [UserSearchService]
})
export class SearchBarComponent {
    users: Observable<User[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private userSearchService: UserSearchService
    ) {}

    ngOnInit(): void {
        this.users = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged() // ignore if next search is same as previous
            .switchMap(term => term ? this.userSearchService.search(term) : Observable.of<User[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<User[]>([]);
            });
    }

    search(term: string): void {
        this.searchTerms.next(term);
    }
}