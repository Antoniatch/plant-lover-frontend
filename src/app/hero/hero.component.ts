import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.sass'
})
export class HeroComponent {
    text: string = "Rejoignez le plus grand jardin partagé des Internets"
    bullets = [
      {
        id: 0,
        text: "Astuces"
      },
      {
        id: 1,
        text: "Conseils"
      },
      {
        id: 2,
        text: "Partage"
      },
    ]
}
