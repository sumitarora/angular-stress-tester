import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3210Component } from './comp-3210.component';

describe('Comp3210Component', () => {
  let component: Comp3210Component;
  let fixture: ComponentFixture<Comp3210Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3210Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
