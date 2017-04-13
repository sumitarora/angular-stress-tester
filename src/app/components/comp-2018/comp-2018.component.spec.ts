import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2018Component } from './comp-2018.component';

describe('Comp2018Component', () => {
  let component: Comp2018Component;
  let fixture: ComponentFixture<Comp2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
