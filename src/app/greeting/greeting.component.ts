import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
  // animations:[  trigger('list1', [
  //   state('in', style({
  //     opacity: 1,
  //     transform: 'translateX(0)'
  //   })),
  //   transition('void => *', [
  //     style({
  //       opacity: 0,
  //       transform: 'translateX(-100px)'
  //     }),
  //     animate(300)
  //   ]),
  //   transition('* => void', [
  //     animate(300, style({
  //       transform: 'translateX(100px)',
  //       opacity: 0
  //     }))
  //   ])
  // ])]
  //
  //
  // animations: [
  //   trigger('visibilityChanged', [
  //     state('in', style({
  //       opacity: 0
  //     })),
  //     state('out',   style({
  //       opacity: 1
  //     })),
  //     transition('in => out', animate('100ms ease-in')),
  //     transition('out => in', animate('100ms ease-out'))
  //   ])
  // ]


})
export class GreetingComponent implements OnInit {
  greeting = {
    username: 'Judah Irani',
    title: 'Hi all, I\'m Judah',
    subTitle: 'Passionate Full Stack Developer | Expert in Java, Web Technologies & E-Comm Platform | Creative Problem Solver | \n' +
      ' As a dedicated and innovative Full Stack Developer, I bring a wealth of experience in designing, developing,' +
      ' and refining software applications across the entire development lifecycle. My expertise lies in crafting seamless ' +
      ' user experiences, orchestrating efficient development processes, and delivering impactful solutions that drive business success.',
    subPoints: 'End-to-End Excellence: Conceptualized, designed, coded, tested, and refined software applications, ensuring exceptional quality from inception to completion. | ' +
      ' Quality Guardian: maintaining and enhancing software quality throughout its lifecycle. | Strategic Insight | ' +
      ' Meticulous Craftsmanship: Developed, modified, and thoroughly tested software code, producing detailed inspection reports and comprehensive documentation. |' +
      ' Project Leadership: Successfully led independent software projects, showcasing effective project management skills and driving successful outcomes. \n',
    skillsSnapshot: 'Java | Spring | Hibernate | HTML/CSS | JavaScript | Angular | NodeJS | DevOps (Docker, Kubernetes) |' +
      ' Git | AWS, Azure | Scrum | Jira | Software Testing | Project Documentation ',
    Attributes: 'Technical Lead & Architect | Problem Solver | Agile Enthusiast | Effective Communicator | Creative Innovator ',
    professionalCredentials: 'JAVA Certified Developer | SAP Commerce Certified Developer | Scrum Master Course Complete Certified \n' +
      ' Let\'s connect to explore how my expertise and passion for innovation can contribute to your next project\'s success!',
    resumeLink: 'https://drive.google.com/file/d/1eLZJs4yIvw01pP9IJQ-tQUClxnQYqJKE/view?usp=drive_link'
  };
/*subTitle: 'A passionate Software Engineer / Lead 🚀 having 8 years of experience building Web applications, ' +
    'maintaining E-Comm websites, designing and developing Middleware platform with Java / JavaScript / Angular / Nodejs.\n' +
    'A team player with a talent in managing teams with excellent people skills\n' +
    'I am well known for being the one of the best debuggers in my present company.' +
    'In that past I worked as a Java full stack developer, and have worked in projects with platform of varied technologies and language.\n' +
    'I specialize in Java, JS, Nodejs, Angular JS, HTML, CSS, RESTAPIs, Spring and Hibernate, MYSQL, SAP Commerce (Formerly SAP Hybris).\n' +
    'I am familiar with Dev-Ops and tools like Docker, Git, SVN, Azure, AWS Cloud and am constantly learning newer things.\n' +
    'I have a track record of success in building quality apps and have achieved success when leading and guiding team during the course\n',*/
  constructor() { }

  ngOnInit(): void {
  }

}
