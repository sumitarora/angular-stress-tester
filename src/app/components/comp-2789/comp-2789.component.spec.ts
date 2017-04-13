import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2789Component } from './comp-2789.component';

describe('Comp2789Component', () => {
  let component: Comp2789Component;
  let fixture: ComponentFixture<Comp2789Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2789Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2789Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
