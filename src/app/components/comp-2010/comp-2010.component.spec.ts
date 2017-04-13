import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2010Component } from './comp-2010.component';

describe('Comp2010Component', () => {
  let component: Comp2010Component;
  let fixture: ComponentFixture<Comp2010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
