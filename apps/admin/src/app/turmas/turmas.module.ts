import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurmasComponent } from './turmas.component';
import { TurmasRoutingModule } from './turmas-routing.module';



@NgModule({
  declarations: [TurmasComponent],
  imports: [
    CommonModule,
    TurmasRoutingModule
  ]
})
export class TurmasModule { }
