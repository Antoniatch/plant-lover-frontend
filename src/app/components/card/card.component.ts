import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass',
})
export class CardComponent implements OnInit {
  @Input() page: 'plants' | 'community' | null = null;
  @Input() id: string | null = null;
  @Input() name: string | null = null;
  @Input() image: string | null = null;
  @Input() family: string | null = 'Ficus';
  @Input() owners: number | null = 125;
  @Input() comments: number | null = 56;
  @Input() likes: number | null = 345;

  ngOnInit(): void {
    if (this.image === 'none') {
      this.image = '../../../assets/Beleaf - Dessin.png';
    }
  }
}
