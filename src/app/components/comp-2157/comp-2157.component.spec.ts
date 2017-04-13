import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2157Component } from './comp-2157.component';

describe('Comp2157Component', () => {
  let component: Comp2157Component;
  let fixture: ComponentFixture<Comp2157Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2157Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
