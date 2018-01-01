import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

num:number = 0;
num1:number = 0;
fillbu:boolean=false;
fillbd:boolean=false;

  constructor(public navCtrl: NavController) {

  }
upvote()
{
if(this.num==0)
{this.num=1;
this.fillbu=true;}
else
{this.num=0;
this.fillbu=false;}
}

downvote()
{
if(this.num1==0)
{this.num1=1;
this.fillbd=true;
}
else
{this.num1=0;
this.fillbd=false;}
}

}
