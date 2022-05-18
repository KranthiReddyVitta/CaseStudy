import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerControlComponent } from './components/timer-control/timer-control.component';
import { TimerCountComponent } from './components/timer-count/timer-count.component';
import { TimerDisplayComponent } from './components/timer-display/timer-display.component';
import { TimerLayoutComponent } from './components/timer-layout/timer-layout.component';
import { TimerStampsComponent } from './components/timer-stamps/timer-stamps.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: TimerLayoutComponent,
  },
];


@NgModule({
  declarations: [
    TimerControlComponent,
    TimerCountComponent,
    TimerDisplayComponent,
    TimerLayoutComponent,
    TimerStampsComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, FormsModule
  ]
})
export class TimerModule { }
