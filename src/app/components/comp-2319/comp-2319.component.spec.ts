import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2319Component } from './comp-2319.component';

describe('Comp2319Component', () => {
  let component: Comp2319Component;
  let fixture: ComponentFixture<Comp2319Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2319Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
