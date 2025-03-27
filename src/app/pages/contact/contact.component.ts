import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ["", [Validators.required, Validators.email, Validators.maxLength(100), Validators.minLength(5), Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      message: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log("Form Submitted!", this.contactForm.value);
      // Here you can add your form submission logic, like sending the data to a server
    } else {
      console.log("Form is invalid");
    }
  }
}
