import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2015Component } from './comp-2015.component';

describe('Comp2015Component', () => {
  let component: Comp2015Component;
  let fixture: ComponentFixture<Comp2015Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2015Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
