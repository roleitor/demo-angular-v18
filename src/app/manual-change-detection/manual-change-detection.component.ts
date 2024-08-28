import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-manual-change-detection',
  standalone: true,
  imports: [],
  templateUrl: './manual-change-detection.component.html',
  styleUrl: './manual-change-detection.component.css',
})
export class ManualChangeDetectionComponent {
  counter = 0;
  autoUpdate = true;
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit() {
    setInterval(() => {
      this.counter++;
      if (this.autoUpdate) {
        // para marcar el componente para la detección de cambios cuando autoUpdate es verdadero
        this.cdr.markForCheck();
      }
    }, 1000);
  }
  increment() {
    this.counter++;
    // para forzar la detección de cambios inmediatamente después de incrementar el contador
    this.cdr.detectChanges();
  }
  toggleAutoUpdate() {
    this.autoUpdate = !this.autoUpdate;
    if (this.autoUpdate) {
      // se usan para habilitar y deshabilitar la actualización automática
      this.cdr.reattach();
    } else {
      this.cdr.detach();
    }
  }
}
