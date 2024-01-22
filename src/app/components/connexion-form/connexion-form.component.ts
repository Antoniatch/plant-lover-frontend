import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormService } from '../../services/form.service';
import { CommonModule } from '@angular/common';

import { ILoginMessage } from '../../types/interfaces';

@Component({
  selector: 'app-connexion-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './connexion-form.component.html',
  styleUrl: './connexion-form.component.sass',
})
export class ConnexionFormComponent implements OnInit {
  connexionForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  email = this.connexionForm.get('email');
  password = this.connexionForm.get('password');

  loginMessage: ILoginMessage | null = null;

  ngOnInit() {}

  constructor(private formService: FormService) {}

  fieldHasError = this.formService.fieldHasError;
  error = this.formService.error;

  submitLogin() {
    if (this.connexionForm.valid) {
      this.formService.login(this.email?.value ?? '', this.password?.value ?? '').subscribe({
        next: value => {
          if (value.data?.login) {
            const { id, name, accessToken } = value.data?.login;

            localStorage.setItem('token', accessToken);
            localStorage.setItem('id', id);
            localStorage.setItem('name', name);

            this.loginMessage = {
              type: 'success',
              message: `Bienvenue ${name} !`,
            };
          }
        },
        error: err => {
          console.log(err.message);
          if (err.message.includes('User not found')) {
            this.loginMessage = {
              type: 'error',
              message: "Cet utilisateur n'existe pas, vérifie ton adresse e-mail",
            };
          } else if (err.message.includes('Wrong password')) {
            this.loginMessage = {
              type: 'error',
              message: 'Mot de passe incorrect',
            };
          } else {
            this.loginMessage = {
              type: 'error',
              message: `Une erreur est survenue, réessaye dans quelques instants`,
            };
          }
        },
      });
    }
  }
}
