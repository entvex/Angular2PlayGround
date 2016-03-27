import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'favorite',
    template: `
<i
        class="glyphicon glyphicon-heart"
        [class.PinkColor]="isFavorite"
        (click)="onClick()"
                > </i>
<span> {{likes}} </span> 
`
    ,
    styles: [`
    .glyphicon-heart {
    cursor: pointer;
    color: #cccccc;
    }
    .PinkColor {
    color: deeppink;
    }
`]
})

export class favoriteComponent {
    @Input("is-favorite")
    isFavorite = false;
    @Output()
    favoriteChanged = new EventEmitter();
    likes:number = 10;

    onClick() {
        this.isFavorite = !this.isFavorite;

        this.likes += this.isFavorite ? 1 : -1;

        this.favoriteChanged.emit({newValue: this.isFavorite});
    }
}