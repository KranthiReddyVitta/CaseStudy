import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollComponent } from './scroll/scroll.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ScrollComponent,
  }
];

@NgModule({
  declarations: [
    ScrollComponent
  ],
  imports: [
    CommonModule ,
    RouterModule.forChild(routes), FormsModule
  ]
})
export class ScrollModule { }
