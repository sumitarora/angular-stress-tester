import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2535Component } from './comp-2535.component';

describe('Comp2535Component', () => {
  let component: Comp2535Component;
  let fixture: ComponentFixture<Comp2535Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2535Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
