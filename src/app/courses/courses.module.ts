import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ImportsMaterialModule } from '../shared/imports-material/imports-material.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ImportsMaterialModule,
    ReactiveFormsModule

  ]
})
export class CoursesModule { }
