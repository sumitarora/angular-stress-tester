import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3593Component } from './comp-3593.component';

describe('Comp3593Component', () => {
  let component: Comp3593Component;
  let fixture: ComponentFixture<Comp3593Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3593Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3593Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
