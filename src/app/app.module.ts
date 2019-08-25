import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { ViewUserDetailsComponent } from './component/view-user-details/view-user-details.component';
import { GuestPipe } from './pipes/guest.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormTemplateComponent } from './component/form-template/form-template.component';
import { FormReactiveComponent } from './component/form-reactive/form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    ViewUserDetailsComponent,
    GuestPipe,
    FormTemplateComponent,
    FormReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
