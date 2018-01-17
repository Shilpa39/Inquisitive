import {Component,Input} from '@angular/core';

@Component({
    selector:'clapslap',
    template: `
        <ion-row>
            <ion-col center text-center>
                <button ion-button icon-left clear small (click)="upvote()">
                <ion-icon name="ios-thumbs-up-outline" [hidden]="(stateVote==1)"></ion-icon>
                <ion-icon name="ios-thumbs-up" [hidden]="!(stateVote==1)"></ion-icon>
                <div>Clap</div>
                </button>
            </ion-col>

            <ion-col center text-center>
                <button ion-button icon-left clear small>{{initVotes}}</button>
            </ion-col>

            <ion-col center text-center>
                <button ion-button icon-left clear small (click)="downvote()">
                <ion-icon name="ios-thumbs-down-outline" [hidden]="(stateVote==-1)"></ion-icon>
                <ion-icon name="ios-thumbs-down" [hidden]="!(stateVote==-1)"></ion-icon>
                <div>Slap</div>
                </button>
            </ion-col> 
        </ion-row>
    `
})

export class ClapSlapComponent{

@Input() initVotes:number = 19;    //Represents total Number of Votes ---- Will be Obtained from database
@Input() stateVote:number = 1;     //Represents whether the user has already liked or disliked the post --- Will be Obtained from database

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