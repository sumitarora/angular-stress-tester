import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3968Component } from './comp-3968.component';

describe('Comp3968Component', () => {
  let component: Comp3968Component;
  let fixture: ComponentFixture<Comp3968Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3968Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3968Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
