import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      // {path: '', redirectTo: 'student'},
      {path: 'student', loadChildren: './student/student.module#StudentModule'},
      {path: 'staff', loadChildren: './staff/staff.module#StaffModule'},
      {path: 'admin', loadChildren: './admin/admin.module#AdminModule'}
    ]
  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class DashboardModule {
}
