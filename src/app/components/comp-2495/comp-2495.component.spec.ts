import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2495Component } from './comp-2495.component';

describe('Comp2495Component', () => {
  let component: Comp2495Component;
  let fixture: ComponentFixture<Comp2495Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2495Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2495Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
