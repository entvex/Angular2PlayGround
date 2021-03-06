import {Component} from 'angular2/core'
import {CoursesComponent} from './courses.component'
import {authorsComponent} from './authors.component'

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 Apps</h1> <courses></courses> <authors></authors>',
    directives: [CoursesComponent,authorsComponent]
})
export class AppComponent { }