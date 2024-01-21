import { Component } from '@angular/core';
import { AuthenticationComponent } from '../../components/authentication/authentication.component';
import { ConnexionFormComponent } from '../../components/connexion-form/connexion-form.component';

@Component({
  selector: 'app-connexion',
  standalone: true,
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.sass',
  imports: [AuthenticationComponent, ConnexionFormComponent],
})
export class ConnexionComponent {}
