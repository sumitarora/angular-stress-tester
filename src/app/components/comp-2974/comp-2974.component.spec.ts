import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2974Component } from './comp-2974.component';

describe('Comp2974Component', () => {
  let component: Comp2974Component;
  let fixture: ComponentFixture<Comp2974Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2974Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2974Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
