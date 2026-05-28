import { Routes } from '@angular/router';

import { HomePage } from './features/home/pages/home-page/home-page';
import { StudentsPage } from './features/students/pages/students-page/students-page';
import { StudentDetailPage } from './features/students/pages/student-detail-page/student-detail-page';
import { LayoutsPage } from './features/layouts/pages/layouts-page';
import { SignupPage } from './features/signup/pages/signup-page';
import { ProfilePage } from './features/profile/pages/profile-page/profile-page';
import { UiComponentsPage } from './features/ui-components/pages/ui-components-page';
import { SimpsonsPageComponent } from './features/simpsons/pages/simpsons-page/simpsons-page';
import { SimpsonDetailPageComponent } from './features/simpsons/pages/simpson-detail-page/simpson-detail-page';
import { AuthPageComponent } from './features/auth/pages/auth-page/auth-page';
import { authGuard } from './core/guards/auth-guard';
import { guestGuard } from './core/guards/guest-guard';


export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'students',
    component: StudentsPage
  },
  {
    path: 'students/:id',
    component: StudentDetailPage,
    canActivate: [authGuard]
  },
  {
    path: 'layouts',
    component: LayoutsPage
  },
  {
    path: 'signup',
    component: SignupPage
  },
  {
    path: 'profile',
    component: ProfilePage,
    canActivate: [authGuard]
  },
  {
    path: 'project-config',
    loadComponent: () =>
      import('./features/project/pages/project-config-page/project-config-page'),
    canActivate: [authGuard]
  },
  {
    path: 'ui-components',
    component: UiComponentsPage
  },
  {
    path: 'simpsons',
    component: SimpsonsPageComponent
  },
  {
    path: 'simpsons/:id',
    component: SimpsonDetailPageComponent,
    canActivate: [authGuard]
  },
  { path: 'auth', 
    component: AuthPageComponent,
    canActivate: [guestGuard]
  },
  
  {
    path: '**',
    redirectTo: ''
  }
];
