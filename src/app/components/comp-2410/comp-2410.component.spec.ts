import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2410Component } from './comp-2410.component';

describe('Comp2410Component', () => {
  let component: Comp2410Component;
  let fixture: ComponentFixture<Comp2410Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2410Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
