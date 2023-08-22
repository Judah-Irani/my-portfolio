import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: 'https://github.com/Judah-Irani',
    linkedin: 'https://www.linkedin.com/in/judah-irani-933680112',
    gmail: 'myfamily4jesus@gmail.com',
    instagram : 'https://www.instagram.com/judah_irani',
    facebook: 'https://www.facebook.com/judah.irani'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
