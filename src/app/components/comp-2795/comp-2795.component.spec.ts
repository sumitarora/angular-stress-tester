import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2795Component } from './comp-2795.component';

describe('Comp2795Component', () => {
  let component: Comp2795Component;
  let fixture: ComponentFixture<Comp2795Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2795Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2795Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
