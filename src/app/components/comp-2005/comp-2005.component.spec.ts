import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2005Component } from './comp-2005.component';

describe('Comp2005Component', () => {
  let component: Comp2005Component;
  let fixture: ComponentFixture<Comp2005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
