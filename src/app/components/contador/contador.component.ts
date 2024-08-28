import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css',
})
export class ContadorComponent {
  counter = 0;
  counterInterval = 0;
  counterObs$ = this.getCounter();
  private _change = inject(ChangeDetectorRef);
  constructor() {
    setInterval(() => {
      this.counterInterval++;
      this._change.markForCheck();
    }, 1000);
  }
  increment() {
    this.counter++;
  }
  getCounter() {
    return interval(1000);
  }
}
