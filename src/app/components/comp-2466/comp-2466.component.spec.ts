import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2466Component } from './comp-2466.component';

describe('Comp2466Component', () => {
  let component: Comp2466Component;
  let fixture: ComponentFixture<Comp2466Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2466Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
