import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IHeroContent } from '../../interfaces';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.sass'
})
export class HeroComponent {
  @Input() heroContent!: IHeroContent
}
