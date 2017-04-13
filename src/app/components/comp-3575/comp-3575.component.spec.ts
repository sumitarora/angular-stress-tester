import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3575Component } from './comp-3575.component';

describe('Comp3575Component', () => {
  let component: Comp3575Component;
  let fixture: ComponentFixture<Comp3575Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3575Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3575Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
