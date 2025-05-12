import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './voter/dashboard/dashboard.component';
import { VotePageComponent } from './voter/vote-page/vote-page.component';
import { CandidateListComponent } from './candidate/candidate-list/candidate-list.component';
import { ResultViewComponent } from './results/result-view/result-view.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'vote', component: VotePageComponent },
  { path: 'candidates', component: CandidateListComponent },
  { path: 'results', component: ResultViewComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
