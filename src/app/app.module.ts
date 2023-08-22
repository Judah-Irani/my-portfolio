import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GreetingComponent } from './greeting/greeting.component';
import { ButtonComponent } from './button/button.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { SkillsComponent } from './skills/skills.component';
import { SoftwareSkillComponent } from './skills/software-skill/software-skill.component';
import { SkillProgressComponent } from './skill-progress/skill-progress.component';
import { FooterComponent } from './footer/footer.component';
import { TopButtonComponent } from './top-button/top-button.component';
import { ContactComponent } from './contact-us-form/contact/contact.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceCardComponent } from './experience/experience-card/experience-card.component';
import { GithubRepoCardComponent } from './projects/github-repo-card/github-repo-card.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubCalendarComponent } from './github-calendar/github-calendar.component';
import {AnimateModule} from './animation/animate.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GraphQLModule } from './projects/graphql.module';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import {MessageService} from './message.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory(): any {
  return player;
}

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        GreetingComponent,
        ButtonComponent,
        SocialMediaComponent,
        SkillsComponent,
        SoftwareSkillComponent,
        SkillProgressComponent,
        FooterComponent,
        TopButtonComponent,
        ContactComponent,
        TimelineComponent,
        ExperienceComponent,
        ExperienceCardComponent,
        GithubRepoCardComponent,
        ProjectsComponent,
        EducationComponent,
        GithubCalendarComponent,
        ContactUsFormComponent,
    ],
  imports: [
    LottieModule.forRoot({player: playerFactory}),
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    AnimateModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    MessageService,
    { provide: Window,
      useValue: window,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
