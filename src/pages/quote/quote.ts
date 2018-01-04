import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {QuotesService} from '../../services/quotes.service';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {

initVotes:number = 19;    //Represents total Number of Votes ---- Will be Obtained from database
stateVote:number = 1;     //Represents whether the user has already liked or disliked the post --- Will be Obtained from database
facts:Array<Object>;

  constructor(private quoteService: QuotesService,public navCtrl: NavController) {
    this.quoteService.getFacts()
                     .subscribe(res => {
                    console.log("got response from quotes.services.ts to quotepage");

                       this.facts = res;
                       console.log(this.facts);
                     })
                         

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
