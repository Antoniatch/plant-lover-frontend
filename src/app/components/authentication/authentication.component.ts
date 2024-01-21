import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.sass',
})
export class AuthenticationComponent implements OnInit {
  @Input() page!: 'subscription' | 'connexion';

  ngOnInit(): void {}
}
