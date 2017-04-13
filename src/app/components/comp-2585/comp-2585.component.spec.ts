import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2585Component } from './comp-2585.component';

describe('Comp2585Component', () => {
  let component: Comp2585Component;
  let fixture: ComponentFixture<Comp2585Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2585Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2585Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
