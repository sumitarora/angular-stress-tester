import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2146Component } from './comp-2146.component';

describe('Comp2146Component', () => {
  let component: Comp2146Component;
  let fixture: ComponentFixture<Comp2146Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2146Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
