import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3728Component } from './comp-3728.component';

describe('Comp3728Component', () => {
  let component: Comp3728Component;
  let fixture: ComponentFixture<Comp3728Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3728Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3728Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
