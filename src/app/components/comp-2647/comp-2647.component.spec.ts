import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2647Component } from './comp-2647.component';

describe('Comp2647Component', () => {
  let component: Comp2647Component;
  let fixture: ComponentFixture<Comp2647Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2647Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2647Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
