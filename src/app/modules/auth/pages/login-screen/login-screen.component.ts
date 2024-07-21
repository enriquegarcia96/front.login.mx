import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent {
  errorMessage: string = '';

  formGroup: FormGroup = this.formBuilder.group({
    email: ['correoejemplo@gmail.com', [Validators.required, Validators.email]],
    password: ['pasarelaprueba1234', [Validators.required, Validators.minLength(6)]],
  })


  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }


  login(): void {
    const {email, password} = this.formGroup.value;

    if (!email) {
      this.errorMessage = 'Ingrese usuario';
      return;
    } else if (!password) {
      this.errorMessage = 'Ingrese contraseña';
      return;
    }

    this.authService.login(email, password).subscribe({
      next: (token) => {
        localStorage.setItem('tokenMx', token);
        console.log('ENTRO AL TOKEN => ', token);

        this.router.navigate(['home/dashboard']);
        this.formGroup.reset();
      },
      error: error => {
        console.log('Error de inicio de sesión:', error);
        this.errorMessage = error;
        this.formGroup.reset();
      }
    });
  }

  clearErrorMessage() {
    this.errorMessage = '';
  }
}
