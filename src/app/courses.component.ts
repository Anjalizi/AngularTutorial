import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

// after making a component, register it in a module

// for <div id='courses'></div> => selector is #courses
// for <div class='courses'></div> => selector is .courses
// for <courses></courses> => selector is courses (as used below)

@Component({
	selector: 'courses', // CSS selector - value changes as per diff HTML elements
	// template: '<h2>Courses</h2>' // render string 'Courses' in h2
	// template: '<h2>{{ title }}</h2>' // value of title assigned at runtime
	// template: '<h2>{{ "Title: " + title }}</h2>' // concatenate string and DOM element 'title'
	template: `
		<h2>{{ getTitle() }}</h2>
		<ul>
			<li *ngFor="let course of courses">
				{{ course }}
			</li> 
			<li>{{ advanced_courses[0] }}</li>
		</ul>
	` // calling a function to set a DOM element = called STRING INTERPOLATION
	// use '*' whenever you have to modify a DOM using a directive like in *ngFor
	// for loop applied on 'courses' array and items displayed as list
})
export class CoursesComponent {
	title = 'List of Courses';
	courses;
	advanced_courses = ["course4", "course5"]

	constructor() {
		let service = new CoursesService();
		this.courses = service.getCourses();
	}

	getTitle() {
		return this.title;
	}
}