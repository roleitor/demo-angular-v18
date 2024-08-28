import { Component } from '@angular/core';

interface Task{
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[] = [
    {text:'Create proyect',completed:true},
    {text:'Create component nav-var',completed:true},
    {text:'Create component task-list',completed:true}
    ];

}
