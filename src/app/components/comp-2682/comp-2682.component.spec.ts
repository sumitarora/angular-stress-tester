import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2682Component } from './comp-2682.component';

describe('Comp2682Component', () => {
  let component: Comp2682Component;
  let fixture: ComponentFixture<Comp2682Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2682Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2682Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
