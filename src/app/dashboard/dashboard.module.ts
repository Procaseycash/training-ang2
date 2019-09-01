import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import { DBodyComponent } from './layout/d-body/d-body.component';
import { DHeaderComponent } from './layout/d-header/d-header.component';
import { DFooterComponent } from './layout/d-footer/d-footer.component';
import { DSidebarComponent } from './layout/d-sidebar/d-sidebar.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {path: '', component: DBodyComponent},
      {path: 'student', loadChildren: './student/student.module#StudentModule'},
      {path: 'staff', loadChildren: './staff/staff.module#StaffModule'},
      {path: 'admin', loadChildren: './admin/admin.module#AdminModule'}
    ]
  }
];

@NgModule({
  declarations: [DashboardComponent, DBodyComponent, DHeaderComponent, DFooterComponent, DSidebarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class DashboardModule {
}
