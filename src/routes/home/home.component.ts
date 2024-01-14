import { Component } from "@angular/core";
import { HeroComponent } from "../../app/hero/hero.component";
import { HomeContent, IHeroContent } from "../../data/homeContent";

@Component({
    selector: "app-home",
    standalone: true,
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.sass",
    imports: [HeroComponent]
})
export class HomeComponent {
    contents: IHeroContent[] = []

    constructor (private homeContent: HomeContent) {
        this.contents = this.homeContent.getContent()
    }
}