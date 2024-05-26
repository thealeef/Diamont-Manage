import { Component } from '@angular/core';
import { Pessoas } from '../funcionarios.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-funcionarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './funcionarios.component.html',
  styleUrl: './funcionarios.component.scss'
})

export class FuncionariosComponent {

  funcionario: Pessoas = { nome: 'Alef', idade: 20 }

}
