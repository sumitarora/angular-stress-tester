import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2985Component } from './comp-2985.component';

describe('Comp2985Component', () => {
  let component: Comp2985Component;
  let fixture: ComponentFixture<Comp2985Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2985Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
