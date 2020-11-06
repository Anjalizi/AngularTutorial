import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // single instance of CoursesService is created in memory - SINGLETON pattern
    // first dependency is instantiated and then INJECTED into component 
    CoursesService // doing dependency injection of CoursesService into CourseComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
