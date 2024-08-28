import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarCartComponent } from './nav-bar-cart.component';

describe('NavBarCartComponent', () => {
  let component: NavBarCartComponent;
  let fixture: ComponentFixture<NavBarCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
