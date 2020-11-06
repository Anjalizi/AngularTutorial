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
		<h2>{{ len_courses + " " + getTitle() }}</h2>
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
	len_courses;
	advanced_courses = ["course4", "course5"]

	constructor(service: CoursesService) {
		// specifying the service as an arg in the constructor saves us from managing the args of CoursesService
		// it creates an instance of CoursesService and lets us use it
		// let service = new CoursesService(); // DO NOT USE to prevent tight coupling
		this.courses = service.getCourses();
		this.len_courses = this.courses.length;
	}

	getTitle() {
		return this.title;
	}
}