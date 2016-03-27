import {Component} from 'angular2/core'
import {favoriteComponent} from './favorit.component'

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1> 
                <i class="glyphicon glyphicon-star"></i>
                <favorite (favoriteChanged)="onFavoriteChanged($event)" [is-favorite]="post.isFavorite"></favorite>`,
    directives: [favoriteComponent]
})
export class AppComponent {
    post = {
        title: "title",
        isFavorite: true
    }

    onFavoriteChanged($event)
    {
        console.log($event);
    }

}