import { Component, inject } from '@angular/core';
import { AuthenticationComponent } from '../../components/authentication/authentication.component';
import { ConnexionFormComponent } from '../../components/connexion-form/connexion-form.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-connexion',
  standalone: true,
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.sass',
  imports: [AuthenticationComponent, ConnexionFormComponent],
})
export class ConnexionComponent {
  route = inject(ActivatedRoute);
  message!: string;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.message = params['message'];
    });
  }
}
