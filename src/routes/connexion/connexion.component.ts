import { Component } from "@angular/core";
import { AuthenticationComponent } from "../authentication/authentication.component";
import { ConnexionFormComponent } from "../../app/connexion-form/connexion-form.component";
import { FormService } from "../../services/form.service";

@Component({
    selector: 'app-connexion',
    standalone: true,
    templateUrl: './connexion.component.html',
    styleUrl: './connexion.component.sass',
    imports: [AuthenticationComponent, ConnexionFormComponent]
})
export class ConnexionComponent {

}