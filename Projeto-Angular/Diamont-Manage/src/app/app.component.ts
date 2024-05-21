import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent { 
}

//setTimeout(() => {
//  console.log('teste')
//  exbirBtnCarregamento = true
//  console.log(exbirBtnCarregamento)
//}, 10000)





