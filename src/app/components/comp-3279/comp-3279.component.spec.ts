import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3279Component } from './comp-3279.component';

describe('Comp3279Component', () => {
  let component: Comp3279Component;
  let fixture: ComponentFixture<Comp3279Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3279Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
