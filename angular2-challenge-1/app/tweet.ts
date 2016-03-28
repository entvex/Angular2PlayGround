import {Component, Input} from "angular2/core";
import {likeComponent} from "./heart.component";

@Component({
    selector: 'tweet',
    template: `
<div class="media">
  <div class="media-left">
    <a href="#">
      <img class="media-object" src="{{imageSource}}" alt="Image Of people">
    </a>
  </div>
  <div class="media-body">
    <h4 class="media-heading">{{mediaHeading}}</h4>
    <p>{{textContent}}</p>
    <like [totalLikes]="totalLikes" [iLike]="like"></like>
  </div>
</div>`,
    directives: [likeComponent]
})

export class tweetComponent{
    @Input() totalLikes : number = 0;
    @Input() like : boolean = true;
    @Input() imageSource : string = "http://lorempixel.com/100/100/people/";
    @Input() mediaHeading : string = "Heading";
    @Input() textContent : string = "Ne usu fabulas laoreet. Ne ius alterum reprimique, in vix choro qualisque, id corrumpit splendide";
}