import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2648Component } from './comp-2648.component';

describe('Comp2648Component', () => {
  let component: Comp2648Component;
  let fixture: ComponentFixture<Comp2648Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2648Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2648Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
