import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2012Component } from './comp-2012.component';

describe('Comp2012Component', () => {
  let component: Comp2012Component;
  let fixture: ComponentFixture<Comp2012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
