import { Component, OnInit } from '@angular/core';
import {animate, group, query, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    // trigger('routerTransition', [
    //   transition('* <=> *', [
    //     query(':enter, :leave', style({ position: 'fixed', opacity: 1 })),
    //     group([
    //       query(':enter', [
    //         style({ opacity:0 }),
    //         animate('1000ms ease-in-out', style({ opacity:1 }))
    //       ]),
    //       query(':leave', [
    //         style({ opacity:1 }),
    //         animate('1000ms ease-in-out', style({ opacity:0 }))]),
    //     ])
    //   ])
    // ])

    trigger('fadein', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(5000)
      ]),
      transition('* => void', [
        animate(5000, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }
  greeting = {
    username: 'Judah Irani',
    title: 'Hi all, I\'m Judah',
    subTitle: 'A passionate Software Engineer / Lead 🚀 having 8 years of experience building Web applications, ' +
      'maintaining E-Comm websites, designing and developing Middleware platform with Java / JavaScript / Angular / Nodejs.\n' +
      'A team player with skill in managing teams with excellent people skills\n' +
      'I am well known for being the one of the best debuggers in my present company.' +
      'In that past I worked as a Java full stack developer, and have worked in projects with platform of varied technologies and language.\n' +
      'I specialize in Java, JS, Nodejs, Angular JS, HTML, CSS, RESTAPIs, Spring and Hibernate, MYSQL, SAP Commerce (Formerly SAP Hybris).\n' +
      'I am familiar with Dev-Ops and tools like Docker, Git, SVN, Azure, AWS Cloud and am constantly learning newer things.\n' +
      'I have a track record of success in building quality apps and have achieved success when leading and guiding team during the course\n',
    resumeLink: 'https://drive.google.com/file/d/1eLZJs4yIvw01pP9IJQ-tQUClxnQYqJKE/view?usp=drive_link'
  };

  ngOnInit(): void {
  }

}
