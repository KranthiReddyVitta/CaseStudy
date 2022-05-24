import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: 'timer',
    loadChildren: () =>
      import('./timer/timer.module').then((m) => m.TimerModule),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./shopping/shopping.module').then((m) => m.ShoppingModule),
  },
  {
    path: 'nest',
    loadChildren: () =>
      import('./nested/nested.module').then((m) => m.NestedModule),
  },
  {
    path: 'grid',
    loadChildren: () => import('./grid/grid.module').then((m) => m.GridModule),
  },
  {
    path: 'scroll',
    loadChildren: () =>
      import('./scroll/scroll.module').then((m) => m.ScrollModule),
  },
  {
    path: 'timer-input',
    loadChildren: () =>
      import('./timer-input/timer-input.module').then((m) => m.TimerInputModule),
  },
  {
    path: '',
    redirectTo: 'nest',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
