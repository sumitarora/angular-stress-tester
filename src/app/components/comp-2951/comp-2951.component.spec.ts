import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2951Component } from './comp-2951.component';

describe('Comp2951Component', () => {
  let component: Comp2951Component;
  let fixture: ComponentFixture<Comp2951Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2951Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2951Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
