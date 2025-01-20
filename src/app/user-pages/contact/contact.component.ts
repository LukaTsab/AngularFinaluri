import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // Template reference for the form
  @ViewChild('contactForm', { static: false }) contactForm!: ElementRef<HTMLFormElement>;

  // Handle form submission
  onSubmit(): void {
    // Collect form input values
    const name: string = (document.querySelector('#name') as HTMLInputElement).value;
    const email: string = (document.querySelector('#email') as HTMLInputElement).value;
    const phone: string = (document.querySelector('#phone') as HTMLInputElement).value;
    const message: string = (document.querySelector('#message') as HTMLTextAreaElement).value;

    if (name && email && phone && message) {
      alert('Input Sent');
      // Optionally clear the form after submission
      this.contactForm.nativeElement.reset();
    } else {
      alert('Please fill out all fields.');
    }
  }
}
