import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2427Component } from './comp-2427.component';

describe('Comp2427Component', () => {
  let component: Comp2427Component;
  let fixture: ComponentFixture<Comp2427Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2427Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
