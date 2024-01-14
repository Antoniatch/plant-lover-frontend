import { Routes } from '@angular/router';
import { PlantComponent } from './plants/plants.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Beleef',
        component: HomeComponent,
    },
    {
        path: "plants",
        title: "Les belles plantes",
        component: PlantComponent
    }
];
