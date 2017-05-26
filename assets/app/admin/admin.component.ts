import { AdminService } from './admin.service';
//import { Ng2SmartTableModule } from 'ng2-smart-table';
import { RSVP } from '../rsvp/rsvp.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    providers: [AdminService]
})

export class AdminComponent {
/*    rsvp: RSVP[];
    errorMsg: string;
    constructor(private rsvpService: RSVPService) {}

    ngOnInit() {
        this.rsvpService.getallrsvp()
            .subscribe(
            (resrsvp) => {
                this.rsvp = resrsvp;
                console.log(resrsvp);
                }
            ,
                reserror => this.errorMsg = reserror);
        delete this.rsvp;
    }
*/
}