import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  displayedColumns = ['_id', 'name', 'category'];

  constructor(
    private coursesService: CoursesService,
    private dialog: MatDialog
    ) {
    this.courses$ = this.coursesService.list().pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos')
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }
}
