import {Component,Input,Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'voter',
    template: `
<div class="voter">
 <i class="glyphicon glyphicon-menu-up vote-button"
 [class.voteLimt]="myVote == 1"
 (click)="onClickUp()">
 </i>
 
 <span> {{voteCount}} </span>
 
 <i class="glyphicon glyphicon-menu-down vote-button"
 [class.voteLimt]="myVote == -1"
  (click)="onClickDown()">
 </i>
</div>
`,
    styles: [`
    .voter {
    width: 20px;
    text-align: center;
    color: #999;
    }
    .vote-button {
    cursor: pointer;
    }
    .voteLimt {
    color: orange;
    }
`]
})

export class VoterComponent{
    //Total votes
    @Input() voteCount: number = 0;
    //Votes from the user (1 0 -1)
    @Input() myVote: number = 0;
    //An event that specifies the ser vote. down or up ? (1 0 -1)
    @Output() vote = new EventEmitter();

    onClickUp()
    {
        if (this.myVote == 1)
            return

        this.myVote++;
        this.voteCount++;
        this.vote.emit({myVote: this.myVote});
    }

    onClickDown()
    {
        if (this.myVote == -1)
            return

        this.myVote--;
        this.voteCount--;
        this.vote.emit({myVote: this.myVote});
    }
}