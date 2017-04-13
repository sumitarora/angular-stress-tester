import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2518Component } from './comp-2518.component';

describe('Comp2518Component', () => {
  let component: Comp2518Component;
  let fixture: ComponentFixture<Comp2518Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2518Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
