import {Component, Input} from 'angular2/core'

@Component({
    selector: 'like',
    template: `
<i
        class="glyphicon glyphicon-heart"
        [class.highlighted]="iLike"
        (click)="onClick()"> </i>
<span> {{totalLikes}} </span> 
`
    ,
    styles: [`
    .glyphicon-heart {
    cursor: pointer;
    color: #cccccc;
    }
    .highlighted {
    color: deeppink;
    }
`]
})

export class likeComponent {
    @Input() iLike = false;
    @Input() totalLikes:number = 10;

    onClick() {
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1 : -1;
    }
}