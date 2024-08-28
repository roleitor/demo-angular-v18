import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualChangeDetectionComponent } from './manual-change-detection.component';

describe('ManualChangeDetectionComponent', () => {
  let component: ManualChangeDetectionComponent;
  let fixture: ComponentFixture<ManualChangeDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManualChangeDetectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
