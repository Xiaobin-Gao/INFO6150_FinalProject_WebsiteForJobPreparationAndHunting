import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import { JobsComponent } from './jobs/jobs.component';
import { CompaniesComponent } from './companies/companies.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { LearningSkillsComponent } from './learning-skills/learning-skills.component';
import { WhatsHotComponent } from './whats-hot/whats-hot.component';
import { DisplaytableComponent } from './displaytable/displaytable.component';
import { InterviewCreateComponent} from './interview-create/interview-create.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'jobs', component: JobsComponent},
  {path: 'companies', component: CompaniesComponent},
  {path: 'interviews', component: InterviewsComponent},
  {path: 'learning-skills', component: LearningSkillsComponent},
  {path: 'whats-hot', component: WhatsHotComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'displayTable', component: DisplaytableComponent},
  {path: 'createinterviews', component: InterviewCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
