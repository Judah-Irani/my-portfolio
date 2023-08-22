import { Component, OnInit } from '@angular/core';
import {AnimationItem} from 'lottie-web';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/animation.json',
  };
  skillsSection = {
    title: 'What I do💁‍♂️',
    subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
    skills: [
      '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications',
      '⚡ Creating application, Middlewares, Connectors using JAVA, SPRING, NODEJS, Express, ANGULAR',
      '⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks',
      '⚡ Integration of third party services such as Firebase/ Heroku/ AWS / Azure',
      '⚡ Experience of working with Computer Vision and NLP projects',
      '⚡ DEVOPS management using Docker, Kubernetes, Jenkins, GIT, SVN',
      '⚡ Experience with multiple OS such as, Linux, MAC OS, Windows',
      '⚡ Experience in leading and managing team of developers',
      '⚡ Communicate well with Customers / Clients into getting their requirements and delivering the desired product.'
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
