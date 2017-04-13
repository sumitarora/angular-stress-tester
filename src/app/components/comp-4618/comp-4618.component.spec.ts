import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4618Component } from './comp-4618.component';

describe('Comp4618Component', () => {
  let component: Comp4618Component;
  let fixture: ComponentFixture<Comp4618Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4618Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4618Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
