import { Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { ManualChangeDetectionComponent } from './manual-change-detection/manual-change-detection.component';
import { ContadorComponent } from './components/contador/contador.component';

export const routes: Routes = [
  { path: 'task-list', component: TaskListComponent },
  { path: 'direct-list', component: ListaAlumnosComponent },
  { path: 'manual-chg-detection', component: ManualChangeDetectionComponent },
  { path: 'counter', component: ContadorComponent },
  {
    path: 'reactividad',
    loadChildren: () =>
      import('./reactividad/reactividad.module').then(
        (m) => m.ReactividadModule
      ),
  },
  {
    path: 'task-signals',
    loadComponent: () =>
      import('./task-signals/task-signals.component').then(
        (cmp) => cmp.TaskSignalsComponent
      ),
  },
  {
    path: 'shopping-redux',
    loadChildren: () =>
      import('./shopping-cart-redux/shopping-cart-redux.module').then(
        (m) => m.ShoppingCartReduxModule
      ),
  },
];
