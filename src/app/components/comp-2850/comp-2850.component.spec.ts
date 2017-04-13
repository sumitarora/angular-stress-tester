import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2850Component } from './comp-2850.component';

describe('Comp2850Component', () => {
  let component: Comp2850Component;
  let fixture: ComponentFixture<Comp2850Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2850Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2850Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
