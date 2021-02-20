import { Routes } from '@angular/router';
import { DemoComponent } from 'app/demo/demo.component';

import { HomeComponent } from './home.component';

export const HOME_ROUTE: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      authorities: [],
      pageTitle: 'Welcome, Java Hipster!',
    },
  },
  {
    path: 'demo',
    component: DemoComponent,
  },
];
