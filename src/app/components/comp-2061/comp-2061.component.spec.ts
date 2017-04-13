import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2061Component } from './comp-2061.component';

describe('Comp2061Component', () => {
  let component: Comp2061Component;
  let fixture: ComponentFixture<Comp2061Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2061Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2061Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
