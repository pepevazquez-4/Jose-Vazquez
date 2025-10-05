import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Importamos tu componente de perfil aquí
import { PerfilCardComponent } from './perfil-card/perfil-card.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  // Añadimos PerfilCardComponent a la lista de imports para que sea accesible
  imports: [RouterOutlet, PerfilCardComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-angular';
}