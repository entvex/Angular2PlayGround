import {Component} from 'angular2/core';
import {tweetComponent} from './tweet'
import {TweetService} from "./tweet.service";

@Component({
    selector: 'my-app',
    template: `
        <h1>Tweets</h1>
        <div *ngFor="#tweet of tweets">
            <tweet [imageSource]="tweet.imageUrl" [textContent]="tweet.body" [mediaHeading]="tweet.author" [totalLikes]="tweet.totalLikes" [like]="tweet.iLike" ></tweet>
        </div>        
        
        `,
    directives: [tweetComponent],
    providers: [TweetService]
})
export class AppComponent {
    tweets;

    constructor(tweetService: TweetService){
        this.tweets = tweetService.getTweets();
    }
}