import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3143Component } from './comp-3143.component';

describe('Comp3143Component', () => {
  let component: Comp3143Component;
  let fixture: ComponentFixture<Comp3143Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3143Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
