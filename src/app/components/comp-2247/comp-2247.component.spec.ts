import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2247Component } from './comp-2247.component';

describe('Comp2247Component', () => {
  let component: Comp2247Component;
  let fixture: ComponentFixture<Comp2247Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2247Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
