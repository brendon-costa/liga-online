import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurmasComponent } from './turmas.component';


export const authRoutes: Routes = [
  {path: '', component: TurmasComponent},
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class TurmasRoutingModule {}
