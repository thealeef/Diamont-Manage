import { Component } from '@angular/core';
import { ConteudoComponent } from '../conteudo/conteudo.component';
import { FuncionariosComponent } from '../funcionarios/funcionarios.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ConteudoComponent, FuncionariosComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})

export class InicioComponent {}

