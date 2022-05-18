import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NestComponent } from './nest/nest.component';

const routes: Routes = [
  {
    path: '',
    component: NestComponent,
  },
];


@NgModule({
  declarations: [NestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NestedModule { }
