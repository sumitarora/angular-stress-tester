import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3070Component } from './comp-3070.component';

describe('Comp3070Component', () => {
  let component: Comp3070Component;
  let fixture: ComponentFixture<Comp3070Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3070Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3070Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
