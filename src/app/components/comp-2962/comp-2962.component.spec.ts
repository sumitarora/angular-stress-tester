import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2962Component } from './comp-2962.component';

describe('Comp2962Component', () => {
  let component: Comp2962Component;
  let fixture: ComponentFixture<Comp2962Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2962Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2962Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
