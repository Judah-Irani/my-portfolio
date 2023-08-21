import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline = [
    // {
    //   heading: "Infosys",
    //   duration: "Present",
    //   subtitle: "",
    //   content: "Upcoming Full stack develover at Infosys!",
    //   className1: "mar-left",
    //   className2: "prt_about_learnbox_right"
    // },
    {
      heading: 'BSc - Computer Science & Electronics',
      duration: '2019',
      subtitle: 'Andhra University, Visakhapatnam',
      content: 'Successfully completed my Bachelors in Computer science and electronics from Andhra University, Visakhapatnam.',
      className1: 'mar-right',
      className2: 'prt_about_learnbox_left'
    },
    {
      heading: 'Board Of Intermediate Education (12th)',
      duration: '2012',
      subtitle: 'SSC Board',
      content: 'Successfully completed my intermediate studies on 2012 from Sree Kasyap Junior College, Visakhapatnam.\n' +
        'Major: Math, Physics, Chemistry.',
      className1: 'mar-left',
      className2: 'prt_about_learnbox_right'
    },
    {
      heading: 'Secondary Education (10th)',
      duration: '2010',
      subtitle: 'SSC Board',
      content: 'Successfully completed my high school studies in 2010 from Andhra University EM School, Visakhapatnam.',
      className1: 'mar-right',
      className2: 'prt_about_learnbox_left'
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
