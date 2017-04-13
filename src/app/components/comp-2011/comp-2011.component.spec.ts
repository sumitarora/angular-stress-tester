import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2011Component } from './comp-2011.component';

describe('Comp2011Component', () => {
  let component: Comp2011Component;
  let fixture: ComponentFixture<Comp2011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
