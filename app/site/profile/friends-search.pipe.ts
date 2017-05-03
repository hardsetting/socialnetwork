import {Pipe, PipeTransform} from '@angular/core';
import {User} from "app/models/user";

@Pipe({name: 'friendsSearch'})
export class FriendsSearchPipe implements PipeTransform {
    transform(value: User[], query: string): User[] {
        if (!Array.isArray(value) || (typeof query !== "string")) {
            return value;
        }

        let lowerQuery = query.toLowerCase();

        return value.filter(user => {
            if (user.surname) {
                let lowerName = user.name.toLowerCase();
                let lowerSurname = user.surname.toLowerCase();
                let fullName = lowerName + " " + lowerSurname;
                return fullName.match(lowerQuery) || lowerName.match(lowerQuery) || lowerSurname.match(lowerQuery);
            } else {
                let lowerName = user.name.toLowerCase();
                return lowerName.match(lowerQuery);
            }
        });
    }
}