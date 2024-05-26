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

//setTimeout(() => {
//  console.log('teste')
//  exbirBtnCarregamento = true
//  console.log(exbirBtnCarregamento)
//}, 10000)





