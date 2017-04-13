import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3411Component } from './comp-3411.component';

describe('Comp3411Component', () => {
  let component: Comp3411Component;
  let fixture: ComponentFixture<Comp3411Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3411Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
