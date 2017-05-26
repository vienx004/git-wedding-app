import { RSVP } from '../rsvp/rsvp.model';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AdminService {
    private rsvps: RSVP[] = []; //handle and store all rsvps for front end
    rsvpIsEdit = new EventEmitter<RSVP>();
    constructor(private http: Http) {}
    private host_url = "http://localhost:3000/";


    getallrsvp() {
        const headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
        return this.http.get(this.host_url + 'admin', {headers: headers})
            .map((response: Response) => {
                const rsvpObjs = response.json().obj;
                let transformedRSVP: RSVP[]= [];
                for(let rsvpObj of rsvpObjs)
                {
                    transformedRSVP.push(new RSVP(rsvpObj.firstName, rsvpObj.lastName, rsvpObj.response, rsvpObj.email, rsvpObj.table));
                }
                this.rsvps = transformedRSVP;
                return transformedRSVP;
                
            })
            .catch(this._errorHandler);
    }

    _errorHandler(error: Response){
    console.error(error);
    return Observable.throw(error);
    }
}