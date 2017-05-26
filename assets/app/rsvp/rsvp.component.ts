import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { RSVPService } from './rsvp.service';
import { RSVP } from './rsvp.model';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-rsvp',
    templateUrl: './rsvp.component.html',
    providers: [RSVPService]
})

export class rsvpComponent implements OnInit{
    rsvps: RSVP[];
    constructor(private rsvpService: RSVPService) {}
    //@Input() rsvp: RSVP; //allows passed values from input

    ngOnInit(){

    }

}