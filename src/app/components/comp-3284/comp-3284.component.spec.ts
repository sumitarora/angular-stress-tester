import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3284Component } from './comp-3284.component';

describe('Comp3284Component', () => {
  let component: Comp3284Component;
  let fixture: ComponentFixture<Comp3284Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3284Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
