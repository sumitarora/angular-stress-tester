import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2467Component } from './comp-2467.component';

describe('Comp2467Component', () => {
  let component: Comp2467Component;
  let fixture: ComponentFixture<Comp2467Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2467Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2467Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
