import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.sass',
})
export class ErrorComponent implements OnInit {
  route = inject(ActivatedRoute);
  message!: string;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.message = params['message'];
    });
  }
}
