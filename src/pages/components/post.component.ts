import { Component, Input } from '@angular/core';

@Component({
  selector: 'post',
  template: `

    <ion-item>
      <ion-avatar item-start>
        <img [src]="fact.FactAuthorImage">
      </ion-avatar>
      <h2>{{fact.FactAuthor}}</h2>
      <p>{{fact.FactDate}}</p>
    </ion-item>
    
    <h1 padding><b>{{fact.FactTitle}}</b></h1>

    <ion-card-content> 
      <p>• {{fact.FactContent}}</p>
    
    </ion-card-content>
    
   `
})
export class PostComponent {
  
 @Input() fact: Object = {};


}