import { Component, OnInit } from '@angular/core';
import {AnimationItem} from 'lottie-web';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-skill-progress',
  templateUrl: './skill-progress.component.html',
  styleUrls: ['./skill-progress.component.scss']
})
export class SkillProgressComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/fullstack.json',
  };
  techStack = {
    viewSkillBars: true,
    experience: [
      {
        Stack: 'Java',
        progressPercentage: '90%'
      },
      {
        Stack: 'Frontend Technologies and UI Design (HTML, CSS, Bootstrap, Material Design, Angular, Nodejs, JS, AJAX, Jquery)',
        progressPercentage: '90%'
      },
      {
        Stack: 'Spring boot and Spring Micro services',
        progressPercentage: '75%'
      },
      {
        Stack: 'REST APIs',
        progressPercentage: '75%'
      },
      {
        Stack: 'Hybris and E-Commerce Platform',
        progressPercentage: '70%'
      },
      {
        Stack: 'Database (MySql, Postgres, Mongo, Oracle)',
        progressPercentage: '75%'
      },
      {
        Stack: 'DevOps (Docker, Kubernetes, Jenkins, Shell Scripting)',
        progressPercentage: '85%'
      },
      {
        Stack: 'Version Control (GIT, SVN)',
        progressPercentage: '95%'
      },
      {
        Stack: 'Reporting, Accounting and Team Management Tools',
        progressPercentage: '100%'
      }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

  progressStyle(percentage: string){
    return {    width: percentage};
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
