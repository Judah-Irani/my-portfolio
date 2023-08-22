import {Injectable} from '@angular/core';
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class MessageService {
  mailOptions = {
    from_name: '',
    from_email: '',
    message: '',
  };
  constructor() {}
  sendEmail(name: string, email: string, message: string): Promise<EmailJSResponseStatus> {
    this.mailOptions.from_email = email;
    this.mailOptions.from_name = name;
    this.mailOptions.message = message;
    return emailjs.send('service_bor6cef', 'template_nb15e0a', this.mailOptions, 'lHxGyNiIRWptJ1nRY');
  }
}
