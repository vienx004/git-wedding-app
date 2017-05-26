import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-photo',
    template: `
    <app-gallery [datasource]=images></app-gallery>
  `
})

export class PhotoComponent{
    images;
    
     image_url = "http://localhost:3000/images/";

   constructor(){
      this.images = [
	    {
        "url":"https://www.deltaco.com/files/menu/item/1-The-Del-Taco-%28Crunchy%29.png",
        "title":"deltaco taco",
        "caption":"taco from deltaco"
        },
        {
        "url": this.image_url + "tacos.jpg",
        "title":"tacos",
        "caption":"good tacos"
        },
        {
        "url": this.image_url + "clay-pot.jpg",
        "title":"clay-pot",
        "caption":"good claypot in NY"
        },
        {
        "url": this.image_url + "cream-puff.jpg",
        "title":"cream-puff",
        "caption":"matcha cream-puff in NY"
        },
        {
        "url": this.image_url + "cronut.jpg",
        "title":"cronut",
        "caption":"cronut in NY"
        },
        {
        "url": this.image_url + "dumpling.jpg",
        "title":"dumpling",
        "caption":"soup dumplings din tai fung"
        },
        {
        "url": this.image_url + "froyo.jpg",
        "title":"frozen yogurt",
        "caption":"frozen yogurt or ice cream?"
        },
        {
        "url": this.image_url + "poke.jpg",
        "title":"poke bowl",
        "caption":"poke bowl in NY"
        },
        {
        "url": this.image_url + "ramen.jpg",
        "title":"ramen",
        "caption":"ramen in NY"
        },
        {
        "url": this.image_url + "ramen2.jpg",
        "title":"ramen",
        "caption":"ramen in NY part 2"}
      ];
   }
}