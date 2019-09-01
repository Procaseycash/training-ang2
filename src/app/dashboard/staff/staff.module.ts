import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StaffComponent} from './staff.component';
import {RouterModule, Routes} from '@angular/router';
import { StaffDashComponent } from './staff-dash/staff-dash.component';

const routes: Routes = [
  {
    path: '', component: StaffComponent,
    children: [
      {path: '', component: StaffDashComponent},
    ]
  },
];

@NgModule({
  declarations: [StaffComponent, StaffDashComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StaffModule {
}
