import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from './counter-state';
import * as CounterActions from './counter-actions';

@Component({
  selector: 'app-my-counter',
  standalone: true,
  imports: [[CommonModule]],
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.css',
})
export class MyCounterComponent {
  count$: Observable<number>;
  constructor(private store: Store<{ counter: CounterState }>) {
    this.count$ = this.store.select((state) => state.counter.count);
  }

  increment() {
    this.store.dispatch(CounterActions.increment());
  }
  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  reset() {
    this.store.dispatch(CounterActions.reset());
  }
}
