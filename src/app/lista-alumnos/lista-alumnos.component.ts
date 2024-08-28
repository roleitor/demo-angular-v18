import { Component } from '@angular/core';
import { OrdenarPorDirective } from '../directive/ordenar-por.directive';

@Component({
  selector: 'app-lista-alumnos',
  standalone: true,
  imports: [OrdenarPorDirective],
  templateUrl: './lista-alumnos.component.html',
  styleUrl: './lista-alumnos.component.css',
})
export class ListaAlumnosComponent {
  alumnos = [
    { nombre: 'Julio', apellido: 'Vargas' },
    { nombre: 'Jorge', apellido: 'Chavez' },
    { nombre: 'Ana', apellido: 'Gomez' },
    { nombre: 'Abel', apellido: 'Soto' },
  ];
  options = ['nombre', 'apellido'];
  currentSortAttribute: 'nombre' | 'apellido' = 'nombre';
  sortBy(attribute: 'nombre' | 'apellido'): void {
    this.currentSortAttribute = attribute;
  }
}
