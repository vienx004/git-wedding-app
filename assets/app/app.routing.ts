import { AdminComponent } from "./admin/admin.component";
import { Routes, RouterModule } from "@angular/router";
import { rsvpComponent } from "./rsvp/rsvp.component";
import { DetailComponent } from "./details/detail.component";
import { HomeComponent } from "./home/home.component";
import { PhotoComponent } from "./photos/photo.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo:'/home', pathMatch:'full'},
    { path: 'home', component: HomeComponent},
    { path: 'details', component: DetailComponent},
    { path: 'rsvp', component: rsvpComponent},
    { path: 'photos', component: PhotoComponent},
    { path: 'admins', component: AdminComponent}

];

export const routing = RouterModule.forRoot(APP_ROUTES);