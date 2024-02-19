import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass',
})
export class CardComponent {
  // Inputs communs
  @Input({ required: true }) format!: 'plant' | 'user' | 'observation';

  @Input() name: string = '';
  @Input() image: string = '../../../assets/Beleaf - Dessin.png';
  @Input() likes: number | 'NR' = 'NR';

  // Inputs des plantes et observations
  @Input() comments: number | 'NR' = 'NR';

  // Inputs des plantes
  @Input() family: string = 'NR';
  @Input() owners: number | 'NR' = 'NR';

  // Inputs des utilisateurs
  @Input() numberOfPlants: number | 'NR' = 'NR';
  @Input() numberOfPublications: number | 'NR' = 'NR';
}
