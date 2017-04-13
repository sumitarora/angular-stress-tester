import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2496Component } from './comp-2496.component';

describe('Comp2496Component', () => {
  let component: Comp2496Component;
  let fixture: ComponentFixture<Comp2496Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2496Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
