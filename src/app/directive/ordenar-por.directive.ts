import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
} from '@angular/core';
@Directive({
  selector: '[appSortByAttribute]',
  standalone: true,
})
export class OrdenarPorDirective implements OnChanges {
  @Input('appSortByAttribute') alumnos: Array<{
    nombre: string;
    apellido: string;
  }>;
  @Input() sortAttribute: 'nombre' | 'apellido';
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.alumnos = [];
    this.sortAttribute = 'nombre';
  }

  ngOnChanges() {
    if (this.alumnos && this.alumnos.length > 0) {
      this.sortAlumnos();
    }
  }

  private sortAlumnos() {
    this.alumnos.sort((a, b) =>
      a[this.sortAttribute].localeCompare(b[this.sortAttribute])
    );
    this.renderSortedAlumnos();
  }

  private renderSortedAlumnos() {
    const parentNode = this.el.nativeElement;
    while (parentNode.firstChild) {
      this.renderer.removeChild(parentNode, parentNode.firstChild);
    }
    this.alumnos.forEach((alumno) => {
      const li = this.renderer.createElement('li');
      const text = this.renderer.createText(
        `${alumno.nombre} ${alumno.apellido}`
      );
      this.renderer.appendChild(li, text);
      this.renderer.appendChild(parentNode, li);
    });
  }
}
