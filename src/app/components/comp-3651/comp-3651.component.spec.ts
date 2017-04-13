import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3651Component } from './comp-3651.component';

describe('Comp3651Component', () => {
  let component: Comp3651Component;
  let fixture: ComponentFixture<Comp3651Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3651Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3651Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
