import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2709Component } from './comp-2709.component';

describe('Comp2709Component', () => {
  let component: Comp2709Component;
  let fixture: ComponentFixture<Comp2709Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2709Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2709Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
