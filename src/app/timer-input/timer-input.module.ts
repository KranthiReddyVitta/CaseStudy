import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerInputControlComponent } from './components/timer-input-control/timer-input-control.component';
import { TimerInputCountComponent } from './components/timer-input-count/timer-input-count.component';
import { TimerInputDisplayComponent } from './components/timer-input-display/timer-input-display.component';
import { TimerInputLayoutComponent } from './components/timer-input-layout/timer-input-layout.component';
import { TimerInputStampsComponent } from './components/timer-input-stamps/timer-input-stamps.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: TimerInputLayoutComponent,
  },
];


@NgModule({
  declarations: [
    TimerInputControlComponent,
    TimerInputCountComponent,
    TimerInputDisplayComponent,
    TimerInputLayoutComponent,
    TimerInputStampsComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), ReactiveFormsModule
  ]
})
export class TimerInputModule { }
