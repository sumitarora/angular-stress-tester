import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3003Component } from './comp-3003.component';

describe('Comp3003Component', () => {
  let component: Comp3003Component;
  let fixture: ComponentFixture<Comp3003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
