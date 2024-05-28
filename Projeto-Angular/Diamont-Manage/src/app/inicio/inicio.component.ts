import { Component } from '@angular/core';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CorpoComponent } from './corpo/corpo.component';
import { RodapeComponent } from './rodape/rodape.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CabecalhoComponent, CorpoComponent, RodapeComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})

export class InicioComponent { }

