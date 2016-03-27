import {Component} from 'angular2/core'
import {VoterComponent} from "./voter.component";

@Component({
    selector: 'my-app',
    template: ' <voter [voteCount]="10" [myVote]="0" (vote)="onVote($event)"></voter> ',
    directives: [VoterComponent]
})
export class AppComponent {

    onVote($event)
    {
        console.log($event)
    }
}


