import { Component } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
}