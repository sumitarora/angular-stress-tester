import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2736Component } from './comp-2736.component';

describe('Comp2736Component', () => {
  let component: Comp2736Component;
  let fixture: ComponentFixture<Comp2736Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2736Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2736Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
