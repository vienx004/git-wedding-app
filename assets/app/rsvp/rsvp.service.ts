import { RSVP } from './rsvp.model';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class RSVPService {
    private rsvps: RSVP[] = []; //handle and store all rsvps for front end
    rsvpIsEdit = new EventEmitter<RSVP>();
    constructor(private http: Http) {}
    private host_url = "http://localhost:3000/";

//addrsvp method takes rsvp parameter from onSubmit, performs http post request with rsvp object to backend
    addrsvp(rsvp: RSVP){
        this.rsvps.push(rsvp);
        const body = JSON.stringify(rsvp);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.host_url + 'rsvp/', body , {headers: headers})
        .map((response: Response) => response.json())
        .catch(this._errorHandler);
    }

//getrsvp method takes _email parameter from onFind, performs http get request with _email to backend
    getrsvp(_email) {
        const headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
        return this.http.get('rsvp/' + _email, {headers: headers})
            .map((response: Response) => {
                const rsvpObj = response.json().obj;
                let transformedRSVP: RSVP[]= [];
                    transformedRSVP.push(new RSVP(rsvpObj.firstName, rsvpObj.lastName, rsvpObj.response, rsvpObj.email));
                this.rsvps = transformedRSVP;
                return transformedRSVP;
                
            })
            .catch(this._errorHandler);
    }



_errorHandler(error: Response){
    console.error(error);
    return Observable.throw(error);
}

    editrsvp(rsvp: RSVP) {
        this.rsvpIsEdit.emit(rsvp);
    }
}

