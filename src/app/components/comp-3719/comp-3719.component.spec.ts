import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3719Component } from './comp-3719.component';

describe('Comp3719Component', () => {
  let component: Comp3719Component;
  let fixture: ComponentFixture<Comp3719Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3719Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3719Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
