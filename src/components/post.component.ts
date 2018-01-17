import { Component, Input } from '@angular/core';

@Component({
  selector: 'post',
  template: `

    <ion-item>
      <ion-avatar item-start>
        <img [src]="fact.AuthorImage">
      </ion-avatar>
      <h2>{{fact.Author}}</h2>
      <p>{{fact.Date}}</p>
    </ion-item>
    
    
   `
})
export class PostComponent {
  
 @Input() fact: Object = {};


}