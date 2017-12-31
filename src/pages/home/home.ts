import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

num:number = 0;
  constructor(public navCtrl: NavController) {

  }
upvote()
{
this.num=this.num+1;
}

}
