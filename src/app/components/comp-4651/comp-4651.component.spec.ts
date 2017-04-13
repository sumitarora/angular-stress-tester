import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4651Component } from './comp-4651.component';

describe('Comp4651Component', () => {
  let component: Comp4651Component;
  let fixture: ComponentFixture<Comp4651Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4651Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4651Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
