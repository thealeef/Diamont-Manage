import { Component } from '@angular/core';
import { ConteudoComponent } from '../conteudo/conteudo.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ConteudoComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
