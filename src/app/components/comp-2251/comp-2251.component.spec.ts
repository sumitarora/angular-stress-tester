import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2251Component } from './comp-2251.component';

describe('Comp2251Component', () => {
  let component: Comp2251Component;
  let fixture: ComponentFixture<Comp2251Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2251Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
