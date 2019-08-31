import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {RouterModule, Routes} from '@angular/router';
import {AdminDashComponent} from './admin-dash/admin-dash.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {path: '', component: AdminDashComponent}
    ]
  },
];

@NgModule({
  declarations: [AdminComponent, AdminDashComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminModule {
}
