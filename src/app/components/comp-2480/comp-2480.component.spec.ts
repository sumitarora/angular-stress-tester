import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2480Component } from './comp-2480.component';

describe('Comp2480Component', () => {
  let component: Comp2480Component;
  let fixture: ComponentFixture<Comp2480Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2480Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2480Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
