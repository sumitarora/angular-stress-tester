import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1956Component } from './comp-1956.component';

describe('Comp1956Component', () => {
  let component: Comp1956Component;
  let fixture: ComponentFixture<Comp1956Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1956Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1956Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
