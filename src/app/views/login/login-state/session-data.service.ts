import { Injectable } from "@angular/core";
import { mapTo } from "rxjs/operators";
import { timer } from "rxjs";

@Injectable({providedIn: 'root'})
export class SessionDataService {
    login(credentials) {
        return timer(300)
        .pipe(
            mapTo({token: 'token',name: 'Inbal Sinai'})
        )
    }
}