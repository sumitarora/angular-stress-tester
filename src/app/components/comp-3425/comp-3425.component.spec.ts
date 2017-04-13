import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3425Component } from './comp-3425.component';

describe('Comp3425Component', () => {
  let component: Comp3425Component;
  let fixture: ComponentFixture<Comp3425Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3425Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
