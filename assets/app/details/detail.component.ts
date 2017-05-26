import { Component } from '@angular/core';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html'
})

export class DetailComponent{
    title: string = 'Location';
    lat: number = 44.974524;
    lng: number = -93.282996;

//navigate method to open new window of google maps to navigate to destination
    onNavigate(){
        window.open('https://www.google.com/maps/place/1400+Laurel+Ave+W,+Minneapolis,+MN+55403/@44.9745237,-93.2851843,17z')
    }
}