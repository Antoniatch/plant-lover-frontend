import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.sass',
})
export class AuthenticationComponent implements OnInit {
  @Input() page!: 'subscription' | 'connexion';

  route = inject(ActivatedRoute);
  message!: string;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.message = params['message'];
    });
  }
}
