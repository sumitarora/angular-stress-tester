import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3052Component } from './comp-3052.component';

describe('Comp3052Component', () => {
  let component: Comp3052Component;
  let fixture: ComponentFixture<Comp3052Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3052Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3052Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
