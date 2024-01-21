import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthenticationComponent } from '../../components/authentication/authentication.component';
import { SubscriptionFormComponent } from '../../components/subscription-form/subscription-form.component';

@Component({
  selector: 'app-subscription',
  standalone: true,
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.sass',
  imports: [CommonModule, AuthenticationComponent, SubscriptionFormComponent],
})
export class SubscriptionComponent {}
