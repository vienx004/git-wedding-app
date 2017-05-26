import { AdminService } from './admin.service';
//import { Ng2SmartTableModule } from 'ng2-smart-table';
import { RSVP } from '../rsvp/rsvp.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-admin-datatable',
    templateUrl: './admin-datatable.component.html'

})


export class AdminDatatableComponent implements OnInit{
    rsvps: RSVP[];
    cols: any[];
    errorMsg: string;
    constructor(private adminService: AdminService) {}

    ngOnInit() {
        this.adminService.getallrsvp()
            .subscribe(
            (rsvps: RSVP[]) => {
                this.rsvps = rsvps;
                console.log(rsvps);
                }
            ,
                reserror => this.errorMsg = reserror);

        //define cols object with field and header attributes according to rsvp object
        this.cols = [
            {field: 'firstName', header: 'FirstName'},
            {field: 'lastName', header: 'LastName'},
            {field: 'email', header: 'Email'},
            {field: 'response', header: 'Response'},
            {field: 'table', header: 'Table'}
        ]

        delete this.rsvps;
    }

}