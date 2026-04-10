import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class SignUpComponent {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      dateOfBirth: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Sign up attempt:', this.signupForm.value);
      // Logic for registration
      this.router.navigate(['/login']);
    }
  }

  onLogin() {
    this.router.navigate(['/login']);
  }
}
