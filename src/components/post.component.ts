import { Component, Input } from '@angular/core';

@Component({
  selector: 'post',
  template: `

    <ion-item style="background-color:#ff3399;z-index:5;">
      <ion-avatar item-start>
        <img [src]="fact.AuthorImage">
      </ion-avatar>
      <h2 style="color:white;text-shadow: 2px 2px 4px #000000;">{{fact.Author}}</h2>
      <p style="color:white;text-shadow: 2px 2px 4px #000000;">{{fact.Date}}</p>
    </ion-item>
    
    
   `
})
export class PostComponent {
  
 @Input() fact: Object = {};


}