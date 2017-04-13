import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2190Component } from './comp-2190.component';

describe('Comp2190Component', () => {
  let component: Comp2190Component;
  let fixture: ComponentFixture<Comp2190Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2190Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
