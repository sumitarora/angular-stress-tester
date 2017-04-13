import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3045Component } from './comp-3045.component';

describe('Comp3045Component', () => {
  let component: Comp3045Component;
  let fixture: ComponentFixture<Comp3045Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3045Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3045Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
