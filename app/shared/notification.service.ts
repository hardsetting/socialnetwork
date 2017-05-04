import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Notification} from "../models/notification";
import {AuthHttp} from "./auth-http.service";

@Injectable()
export class NotificationService {

    constructor(
        private authHttp: AuthHttp,
    ) { }

    getLatests(limit: number = 6): Observable<Notification[]> {
        return this.authHttp
            .get(`api/notifications?limit=${limit}`)
            .map(r => r.json())
            .map(notifications => notifications.map(notification => new Notification(notification)));
    }

    read(id: number): Observable<void> {
        return this.authHttp
            .patch(`api/notifications/${id}`)
            .map(() => null);
    }
}