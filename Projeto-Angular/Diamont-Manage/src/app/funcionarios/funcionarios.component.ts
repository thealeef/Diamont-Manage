import { Component } from '@angular/core';
import { Pessoas } from '../funcionarios.model';

@Component({
  selector: 'app-funcionarios',
  standalone: true,
  imports: [],
  templateUrl: './funcionarios.component.html',
  styleUrl: './funcionarios.component.scss'
})
export class FuncionariosComponent {

  funcionario: Pessoas = {nome: 'Alef', idade: 20}

}
