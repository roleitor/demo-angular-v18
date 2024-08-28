import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSignalsComponent } from './task-signals.component';

describe('TaskSignalsComponent', () => {
  let component: TaskSignalsComponent;
  let fixture: ComponentFixture<TaskSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
