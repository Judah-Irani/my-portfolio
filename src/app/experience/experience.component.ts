import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: 'Senior Software Engineer FTE',
        company: 'PFSWeb Later acquired by MERKLE a Dentsu company',
        color: '#16275B',
        companylogo: '../../../assets/images/merkle.jpeg',
        date: 'SEP 2020 - PRESENT',
        desc: 'Senior software Engineer, worked on E-Comm Platform of different frameworks such as BigCommerce, Shopify, Vtex, SAP Hybirs' +
          'and a few more. Meanwhile also keeping in touch with the latest tech stack and keeping the full stack hope alive',
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      }, {
        role: 'Senior Software Engineer Consultant',
        company: 'PFS Web',
        color: '#3781c2',
        companylogo: '../../../assets/images/pfs.webp',
        date: 'FEB 2020 - SEP 2020',
        desc: 'Senior software Engineer, worked on E-Comm Platform of different frameworks such as BigCommerce, Shopify, Vtex, SAP Hybirs' +
          'and a few more. Meanwhile also keeping in touch with the latest tech stack and keeping the full stack hope alive',
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      }, {
        role: 'Senior Software Engineer Consultant',
        company: 'Bhoomi Software Solutions',
        color: '#158332',
        companylogo: '../../../assets/images/bhoomi.jpg',
        date: 'OCT 2019 - FEB 2020',
        desc: 'Worked as Java consultant in designing and maintaining school Web App',
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      }, {
        role: 'Software Engineer',
        company: 'EproSoft India PVT LTD.',
        color: '#0574B6',
        companylogo: '../../../assets/images/eprosoft.jpg',
        date: 'APR 2018 – SEP 2019',
        desc: 'Worked as a Software Engineer, managing and developing Server side application, deploying, building and performance testing WebApps ' +
          'Also worked as SAP hybris Managed service Engineer',
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      }, {
        role: 'Junior Software Developer',
        company: 'BayLogic Technologies',
        color: '#ff9102',
        companylogo: '../../../assets/images/baylogic.jpg',
        date: 'May 2014 – Apr 2018',
        desc: 'Joined as an Intern, fashioned into a Java Developers to develop and maintain Web Apps',
        },
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
