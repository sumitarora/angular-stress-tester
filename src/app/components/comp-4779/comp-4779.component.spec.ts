import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4779Component } from './comp-4779.component';

describe('Comp4779Component', () => {
  let component: Comp4779Component;
  let fixture: ComponentFixture<Comp4779Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4779Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4779Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
