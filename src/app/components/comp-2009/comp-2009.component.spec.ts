import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2009Component } from './comp-2009.component';

describe('Comp2009Component', () => {
  let component: Comp2009Component;
  let fixture: ComponentFixture<Comp2009Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2009Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
