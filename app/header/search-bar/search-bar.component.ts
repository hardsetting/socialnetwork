import {Component, OnInit} from '@angular/core';

import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

import {User} from "../../models/user";
import {UserSearchService} from "../../shared/user-search.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'sn-search-bar',
    templateUrl: 'search-bar.component.html',
    styleUrls: ['search-bar.component.css'],
    providers: [UserSearchService]
})
export class SearchBarComponent implements OnInit {
    users: Observable<User[]>;
    searchTerm: string;

    private searchTerms = new Subject<string>();

    constructor(
        private userSearchService: UserSearchService,
        private router: Router
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

    search(): void {
        this.searchTerms.next(this.searchTerm);
    }

    gotoUser(user: User): void {
        this.searchTerm = '';
        this.router.navigate(['/profile', user.id]);
    }
}