import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortDirective } from './sort.directive';
import { GridComponent } from './grid/grid.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GridComponent,
  },
];

@NgModule({
  declarations: [
    SortDirective,
    GridComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GridModule { }
