import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-logo',
    standalone: true,
    templateUrl: './logo.component.html',
    styleUrl: './logo.component.sass',
    imports: [RouterLink]
})

export class LogoComponent {

}