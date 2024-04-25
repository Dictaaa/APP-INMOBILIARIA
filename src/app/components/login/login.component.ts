import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { login } from 'src/app/services/endpoints'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginError: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')!.value;
      const password = this.loginForm.get('password')!.value;

      login(username, password)
        .then((userData) => {
          if (userData) {
            this.router.navigate(['/menu']);
          } else {
            this.loginError = 'Usuario o contraseña inválidos';
          }
        })
        .catch((error) => {
          this.loginError = 'Error al iniciar sesión';
        });
    } else {
      this.loginError = 'Por favor, complete los campos';
    }
  }
}
