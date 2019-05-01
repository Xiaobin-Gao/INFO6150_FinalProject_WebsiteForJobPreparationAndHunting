import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AtYourServiceComponent } from './at-your-service/at-your-service.component';
import { HotNewsComponent } from './hot-news/hot-news.component';
import { JobsComponent } from './jobs/jobs.component';
import { CompaniesComponent } from './companies/companies.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { LearningSkillsComponent } from './learning-skills/learning-skills.component';
import { WhatsHotComponent } from './whats-hot/whats-hot.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { DisplaytableComponent } from './displaytable/displaytable.component';
import { PostSectionComponent } from './post-section/post-section.component';
import { InterviewOneComponent } from './interview-one/interview-one.component';
import { InterviewCreateComponent } from './interview-create/interview-create.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AtYourServiceComponent,
    HotNewsComponent,
    JobsComponent,
    CompaniesComponent,
    InterviewsComponent,
    LearningSkillsComponent,
    WhatsHotComponent,
    SearchSectionComponent,
    DisplaytableComponent,
    PostSectionComponent,
    InterviewOneComponent,
    InterviewCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
