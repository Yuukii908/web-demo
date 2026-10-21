import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  loading = false;
  succesMessage = '';

  skills = [
    'Angular',
    'TypeScrypt',
    'Nest.JS',
    'Node.Js',
    'MySQL',
    'MongoDB',
    'Git',
    'REST API',
    'Laravel',
    'Flutter',
    'HTML',
    "CSS"
  ];

  projects = [
    {
      number: '01',
      title: 'School Inventory System',
      description:
        'Full stack inventory and equipment lending management Website',
      technologies: [
        'Laravel',
        'MySQL'
      ],
      github: 'https://github.com/Yuukii908/UKKAdmin'
    },

    {
      number: '02',
      title: 'Authentication System',
      description: 'Secure authentication system using JWT, guards and password hashing.',
      technologies: [
        'Nest.JS',
        'JWT',
        'MongoDB',
        'Angular'
      ],
      github: 'https://github.com/Yuukii908/angular-login-app'
    }
  ];

  contact ={
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(
    private  contactService: ContactService
  ) {}

  sendMessage(){

    this.loading = true;
    this.succesMessage = '';

    this.contactService
    .sendMessage(this.contact)
    .subscribe({

      next: () => {

        this.loading = false;

        this.succesMessage =
        'Message send successfully!';

        this.contact = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };

      },

      error: () => {

        this.loading = false;

        this.succesMessage =
          'Something went wrong.';
      }

    });

  }

}
