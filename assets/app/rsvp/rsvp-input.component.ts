import { Component, Input, OnInit } from '@angular/core';
import { RSVP } from './rsvp.model';
import { CommonModule } from '@angular/common';
import { RSVPService } from './rsvp.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-rsvp-input',
    templateUrl: './rsvp-input.component.html'
})

export class rsvpInputComponent implements OnInit{
    rsvp: RSVP[];
    errorMsg: string;

    constructor(private rsvpService: RSVPService) {}

//submit method takes information in angular form and passes to addrsvp method in services
    onSubmit(form: NgForm) {
        const rsvp = new RSVP(form.value.firstName, form.value.lastName, form.value.response, form.value.email);
        this.rsvpService.addrsvp(rsvp).subscribe( 
            data => console.log(data), //data from observable object from subcribe
            error => console.log(error)
            //3rd parameter when complete
            );
        form.resetForm();
    }

//find method based on email text box on form and passes to getrsvp method in services
    onFind(form: NgForm) {
        const _email = form.value.email;
        this.rsvpService.getrsvp(_email)
            .subscribe(
            (resrsvp) => {
                this.rsvp = resrsvp[0];
                console.log(resrsvp);
                }
            ,
                reserror => this.errorMsg = reserror);
        delete this.rsvp;
    }

//clear method to reset form
    onClear(form: NgForm) {
        form.resetForm();
    }

    ngOnInit() {
     /*   this.rsvpService.rsvpIsEdit.subscribe(
            (rsvp: RSVP) => this.rsvp = rsvp
        );*/
    }
}