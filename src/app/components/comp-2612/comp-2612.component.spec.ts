import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2612Component } from './comp-2612.component';

describe('Comp2612Component', () => {
  let component: Comp2612Component;
  let fixture: ComponentFixture<Comp2612Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2612Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
