import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Task } from '../model/task-model';

@Component({
  selector: 'app-task-signals',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-signals.component.html',
  styleUrl: './task-signals.component.css',
})
export class TaskSignalsComponent {
  taskForm: FormGroup;
  private fb = inject(FormBuilder);
  openModal: string = 'none';
  tasks = signal<Task[]>([
    {
      id: 1,
      text: 'task 1',
      completed: true,
    },
  ]);
  isEdit = signal<boolean>(false);
  constructor() {
    this.taskForm = this.fb.group({
      id: [0],
      text: ['', [Validators.required, Validators.minLength(3)]],
      completed: [false],
    });
  }
  onSubmit() {
    const task: Task = this.taskForm.value;
    if (this.isEdit()) {
      this.tasks.update((tks) =>
        tks.map((tk) => (tk.id === task.id ? { ...tk, ...task } : tk))
      );
    } else {
      task.id = this.tasks().length + 1;
      this.tasks.update((tsk) => [...tsk, task]);
    }
    this.taskForm.reset();
    this.openModal = 'none';
  }
  editTask(tsk: Task) {
    console.log(tsk);
    this.taskForm.setValue(tsk);
    this.openModal = 'block';
    this.isEdit.set(true);
  }
  removeTask(id: number) {
    this.tasks.update((tsk) => tsk.filter((itm) => itm.id !== id));
  }
}
