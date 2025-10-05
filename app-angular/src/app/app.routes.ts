import { Routes } from '@angular/router';
import { PerfilCardComponent } from './perfil-card/perfil-card.component';

export const routes: Routes = [
    // Esto asegura que al entrar a http://localhost:4200/, solo se cargue PerfilCardComponent una vez
    { path: '', component: PerfilCardComponent } 
];