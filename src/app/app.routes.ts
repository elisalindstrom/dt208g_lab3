import { Routes } from '@angular/router';

// Importera komponenter
import { Home } from './home/home';
import { Convert } from './convert/convert';
import { About } from './about/about';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'convert', component: Convert },
    { path: 'about', component: About },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];