import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2804Component } from './comp-2804.component';

describe('Comp2804Component', () => {
  let component: Comp2804Component;
  let fixture: ComponentFixture<Comp2804Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2804Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2804Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
