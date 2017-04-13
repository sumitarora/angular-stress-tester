import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3780Component } from './comp-3780.component';

describe('Comp3780Component', () => {
  let component: Comp3780Component;
  let fixture: ComponentFixture<Comp3780Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3780Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3780Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
