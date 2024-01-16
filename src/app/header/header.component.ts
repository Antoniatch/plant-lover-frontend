import { Component } from "@angular/core";
import { LogoComponent } from "../logo/logo.component";
import { TopMenuComponent } from "../top-menu/top-menu.component";

@Component({
    selector: "app-header",
    standalone: true,
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.sass",
    imports: [LogoComponent, TopMenuComponent]
})
export class HeaderComponent{}