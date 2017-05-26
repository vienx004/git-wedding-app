import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styles: [`
        ul { padding:0; width:780px; margin:20px auto}
        li { display:inline;}
            .tn{ 
        margin:2px 0px;
        box-shadow:#999 1px 1px 3px 1px; 
        cursor: pointer 
            }
        .modal-content {
            width: 670px !important;
        }
  `]
})

export class GalleryComponent{
   @Input() datasource;
   selectedImage;
 
   setSelectedImage(image){
      this.selectedImage= image;	
   }
}