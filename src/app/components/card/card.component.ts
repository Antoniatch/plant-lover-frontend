import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass',
})
export class CardComponent implements OnInit {
  // Inputs communs
  @Input() page: 'plants' | 'community' | null = null;

  @Input() id: string = '';
  @Input() name: string = '';
  @Input() image: string = '';
  @Input() likes: number | null = 345;

  // Inputs des plantes et observations
  @Input() comments: number | null = 56;

  // Inputs des plantes
  @Input() family: string = 'Ficus';
  @Input() owners: number | null = 125;

  // Inputs des utilisateurs
  @Input() numberOfPlants: number | null = 4;
  @Input() numberOfPublications: number | null = 18;

  ngOnInit(): void {
    if (this.image === 'none' || !this.image) {
      this.image = '../../../assets/Beleaf - Dessin.png';
    }
  }
}
