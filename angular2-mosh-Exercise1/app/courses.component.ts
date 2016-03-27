import    {Component}    from 'angular2/core'
import {CourseService} from './course.service'

@Component({
    selector: 'courses',
    template: `
<h2> Courses </h2>
{{ title }}
<input type="text" />
<ul>
    <li *ngFor="#course of _courses">
    {{ course }}
</li>
    
</ul>

`,
    providers: [CourseService]
})

export class CoursesComponent {
    title:string = "View courses";
    _courses;

    constructor(_courseService:CourseService) {
        this._courses = _courseService.getCourse();
    }
}