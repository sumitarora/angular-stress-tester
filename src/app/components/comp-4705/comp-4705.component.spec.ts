import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4705Component } from './comp-4705.component';

describe('Comp4705Component', () => {
  let component: Comp4705Component;
  let fixture: ComponentFixture<Comp4705Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4705Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4705Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
