import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { HomeContentService } from '../../services/homeContent.service';
import { IHeroContent } from '../../types/interfaces';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
  imports: [HeroComponent],
})
export class HomeComponent {
  heroContentList: IHeroContent[] = [];

  constructor(private homeContentService: HomeContentService) {
    this.heroContentList = this.homeContentService.getAllContent();
  }
}
