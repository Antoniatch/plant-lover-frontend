import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-top-menu',
    standalone: true,
    templateUrl: './top-menu.component.html',
    styleUrl: './top-menu.component.sass',
    imports: [RouterLink]
})

export class TopMenuComponent {
    
}