import {Component,Input, Output,EventEmitter} from 'angular2/core'

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html',
    styles: [`
    .glyphicon-star {
    color: orange;
    }
`]
})

export class favoriteComponent{
    @Input("is-favorite") isFavorite = false;
    @Output() favoriteChanged = new EventEmitter();

    onClick()
    {
        this.isFavorite = !this.isFavorite;
        this.favoriteChanged.emit({newValue: this.isFavorite});
    }
}