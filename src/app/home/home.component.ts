import { Component } from '@angular/core';
import { log } from 'node:console';
import emailjs from 'emailjs-com';



@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  SERVICE_ID = 'service_9wcto1f';
  TEMPLATE_ID = 'template_n76wtbm';
  PUBLIC_KEY = 'mP61OITLu4UMnA52O';



  name!:string;
  email!:string;
  location!:string;
  budjet!:string;
  subject!:string;
  message!:string;

   sendEmail() {
    const templateParams = {
      name: this.name,
      email: this.email,
      location: this.location,
      budjet: this.budjet,
      subject: this.subject,
      message: this.message
    };

   



    if(!this.name || !this.email || !this.location || !this.budjet || !this.subject || !this.message) {
      alert('Please fill in all fields.');

    
      return;
    } else {

 emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, templateParams, this.PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
        this.resetForm();
      }, (error) => {
        console.error('FAILED...', error);
        alert('Email sending failed.');
      });
    }


   
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.location = '';
    this.budjet = '';
    this.subject = '';
    this.message = '';
  }




}
