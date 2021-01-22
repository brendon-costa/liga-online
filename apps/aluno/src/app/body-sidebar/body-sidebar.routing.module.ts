import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodySidebarComponent } from './body-sidebar.component';


export const authRoutes: Routes = [
  {path: '', component: BodySidebarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
