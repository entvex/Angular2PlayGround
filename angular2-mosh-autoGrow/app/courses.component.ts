import    {Component}    from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.diretive'

@Component({
    selector: 'courses',
    template: `
<h2> Courses</h2>
{{ title }}
<input type="text" autoGrow />
<ul>
    <li *ngFor="#course of _courses">
    {{ course }}
</li>
    
</ul>

`,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})

export class CoursesComponent {
    title:string = "View courses";
    _courses;

    constructor(_courseService:CourseService) {
        this._courses = _courseService.getCourse();
    }
}