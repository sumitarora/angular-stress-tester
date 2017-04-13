import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2552Component } from './comp-2552.component';

describe('Comp2552Component', () => {
  let component: Comp2552Component;
  let fixture: ComponentFixture<Comp2552Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2552Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2552Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
