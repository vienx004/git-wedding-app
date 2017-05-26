import { AdminDatatableComponent } from './admin/admin-datatable.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from "./app.component";
import { HeaderComponent } from './header.component';
import { rsvpComponent } from './rsvp/rsvp.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './details/detail.component';
import { PhotoComponent } from './photos/photo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { rsvpInputComponent } from './rsvp/rsvp-input.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { GalleryComponent } from './photos/gallery.component';
import { AccordionModule, DataTableModule, SharedModule } from 'primeng/primeng';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        rsvpComponent,
        HomeComponent,
        DetailComponent,
        PhotoComponent,
        rsvpInputComponent,
        GalleryComponent,
        AdminComponent,
        AdminDatatableComponent
    ],
    imports: [
        BrowserModule,
        DataTableModule,
        SharedModule,
        AccordionModule,
        CommonModule, 
        FormsModule, 
        routing, 
        ReactiveFormsModule, 
        HttpModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD6GEfPr0LMkONh0oal4jf0QGmi7cnr6RM'
        })
        ],
    bootstrap: [AppComponent]
})
export class AppModule {

}