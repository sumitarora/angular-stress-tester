import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3767Component } from './comp-3767.component';

describe('Comp3767Component', () => {
  let component: Comp3767Component;
  let fixture: ComponentFixture<Comp3767Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3767Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3767Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
