import { Routes } from '@angular/router';
import { PlantComponent } from './plants/plants.component';
import { HomeComponent } from './home/home.component';
import { CommunityComponent } from './community/community.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HelpComponent } from './help/help.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Beleaf - Accueil',
        component: HomeComponent,
    },
    {
        path: "plantes",
        title: "Beleaf - Plantes",
        component: PlantComponent
    },
    {
        path: "communaute",
        title: "Beleaf - Communauté",
        component: CommunityComponent
    },
    {
        path: "help",
        title: "Beleaf - Help Center",
        component: HelpComponent
    },
    {
        path: "connexion",
        title: "Beleaf - Connexion",
        component: ConnexionComponent
    },
    {
        path: "inscription",
        title: "Beleaf - Inscription",
        component: InscriptionComponent
    }
];
