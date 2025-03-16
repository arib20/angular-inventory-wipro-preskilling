import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authService: AuthService) { }

  onRegister(form: any): void {
    if (form.valid) {
      const email = form.value.email;
  
      this.authService.checkEmailExists(email).subscribe((exists: boolean) => {
        if (exists) {
          alert('User already registered! Please log in.');
        } else {
          this.authService.register(form.value).subscribe(() => {
            alert('Registration successful!');
          });
        }
      });
    } else {
      alert('Please fill out all required fields.');
    }
  }
}  