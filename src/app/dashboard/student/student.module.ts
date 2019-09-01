import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentComponent} from './student.component';
import {RouterModule, Routes} from '@angular/router';
import { StudentDashComponent } from './student-dash/student-dash.component';

const routes: Routes = [
  {
    path: '', component: StudentComponent,
    children: [
      {path: '', component: StudentDashComponent},
    ]
  },
];

@NgModule({
  declarations: [StudentComponent, StudentDashComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StudentModule {
}
