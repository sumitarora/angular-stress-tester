import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2801Component } from './comp-2801.component';

describe('Comp2801Component', () => {
  let component: Comp2801Component;
  let fixture: ComponentFixture<Comp2801Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2801Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
