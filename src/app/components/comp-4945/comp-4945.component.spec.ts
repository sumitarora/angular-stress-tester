import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4945Component } from './comp-4945.component';

describe('Comp4945Component', () => {
  let component: Comp4945Component;
  let fixture: ComponentFixture<Comp4945Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4945Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4945Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
