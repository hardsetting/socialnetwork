import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AuthHttp} from "app/shared/auth-http.service";
import {User} from "app/models/user";

@Injectable()
export class AdminService {
    constructor(private authHttp: AuthHttp) {}

    public getDistribution(step: number = 50): Observable<any> {
        return this.authHttp.get(`/api/admin/distribution?step=${step}`)
            .map(r => r.json());
    }

    public getMostActiveUsers(limit: number = 10): Observable<{user: User, activity: number}[]> {
        return this.authHttp.get(`/api/admin/activity?limit=${limit}`)
            .map(r => r.json());
    }

    public getHubs(limit: number = 10): Observable<{user: User, hubbiness: number}[]> {
        return this.authHttp.get(`/api/admin/hubs?limit=${limit}`)
            .map(r => r.json());
    }

    public getCommunities(limit: number = 6): Observable<{user: User, friends: User[]}[]> {
        return this.authHttp.get(`/api/admin/communities?limit=${limit}`)
            .map(r => r.json());
    }
}