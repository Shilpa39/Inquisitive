import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

initVotes:number = 19;    //Represents total Number of Votes ---- Will be Obtained from database
stateVote:number = 1;     //Represents whether the user has already liked or disliked the post --- Will be Obtained from database


  constructor(public navCtrl: NavController) {

  }

  upvote(){
    if(this.stateVote==1){
      this.stateVote =0;
      this.initVotes = this.initVotes -1;
    }
    else if(this.stateVote==0){
      this.stateVote = this.stateVote +1;
      this.initVotes = this.initVotes +1;
    }
    else if(this.stateVote==-1){
      this.stateVote = this.stateVote +2;
      this.initVotes = this.initVotes +2;
    }
  }

  downvote(){
    if(this.stateVote==-1){
      this.stateVote =0;
      this.initVotes = this.initVotes +1;
    }
    else if(this.stateVote==0){
      this.stateVote = this.stateVote -1;
      this.initVotes = this.initVotes -1;
    }
    else if(this.stateVote==1){
      this.stateVote = this.stateVote -2;
      this.initVotes = this.initVotes -2;
    }
  }
}
