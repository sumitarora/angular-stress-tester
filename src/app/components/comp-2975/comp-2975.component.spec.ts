import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2975Component } from './comp-2975.component';

describe('Comp2975Component', () => {
  let component: Comp2975Component;
  let fixture: ComponentFixture<Comp2975Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2975Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2975Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
