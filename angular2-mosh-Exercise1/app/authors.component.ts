import {Component} from 'angular2/core'
import {AuthorService} from './author.service'

@Component({
    selector: 'authors',
    template: `
<h2> {{title}} </h2>

<ul>
<li *ngFor="#author of _authors">
{{author}}
</li>
</ul>

`,
    providers: [AuthorService]
})

export class authorsComponent {
    title:string = 'view Authors';
    _authors: string[];

    constructor(_authorService:AuthorService) {
        this._authors = _authorService.getAuthors();
    }
}