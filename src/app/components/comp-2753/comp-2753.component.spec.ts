import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2753Component } from './comp-2753.component';

describe('Comp2753Component', () => {
  let component: Comp2753Component;
  let fixture: ComponentFixture<Comp2753Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2753Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2753Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
