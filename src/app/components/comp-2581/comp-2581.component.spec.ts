import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2581Component } from './comp-2581.component';

describe('Comp2581Component', () => {
  let component: Comp2581Component;
  let fixture: ComponentFixture<Comp2581Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2581Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2581Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
