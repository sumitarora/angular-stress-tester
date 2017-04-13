import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2449Component } from './comp-2449.component';

describe('Comp2449Component', () => {
  let component: Comp2449Component;
  let fixture: ComponentFixture<Comp2449Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2449Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
