import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService} from '../message.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss'],
})
export class ContactUsFormComponent implements OnInit{

  FormData: FormGroup;
  showValidation = false;
  constructor(private builder: FormBuilder,
              private messageService: MessageService) { }
  ngOnInit(): void {
    this.FormData = this.builder.group({
      FirstName:  new FormControl('', [Validators.required]),
      LastName:  new FormControl('', [Validators.required]),
      EmailAddress: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Body: new FormControl('', [Validators.required])
    });
  }
  onSubmit(formData): void {
      if (this.FormData.status !== 'VALID') {
        this.showValidation = true;
      } else {
        this.messageService.sendEmail(formData.Name, formData.EmailAddress, formData.Body)
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          }, (err) => {
            console.log('FAILED...', err);
          });
      }
  }
}
