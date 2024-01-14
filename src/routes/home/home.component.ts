import { Component } from "@angular/core";
import { HeroComponent } from "../../app/hero/hero.component";

@Component({
    selector: "app-home",
    standalone: true,
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.sass",
    imports: [HeroComponent]
})
export class HomeComponent {}