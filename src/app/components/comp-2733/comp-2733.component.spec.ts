import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2733Component } from './comp-2733.component';

describe('Comp2733Component', () => {
  let component: Comp2733Component;
  let fixture: ComponentFixture<Comp2733Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2733Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2733Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
