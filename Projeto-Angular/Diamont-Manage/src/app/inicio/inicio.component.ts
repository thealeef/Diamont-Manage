import { Component } from '@angular/core';
import { ConteudoComponent } from '../conteudo/conteudo.component';
import { FuncionariosComponent } from '../funcionarios/funcionarios.component';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ConteudoComponent, FuncionariosComponent, CabecalhoComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})

export class InicioComponent {}

