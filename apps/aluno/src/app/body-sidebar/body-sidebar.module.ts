import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodySidebarComponent } from './body-sidebar.component';
import { LoginRoutingModule } from './body-sidebar.routing.module';



@NgModule({
  declarations: [BodySidebarComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class BodySidebarModule { }
