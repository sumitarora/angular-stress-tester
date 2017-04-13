import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3640Component } from './comp-3640.component';

describe('Comp3640Component', () => {
  let component: Comp3640Component;
  let fixture: ComponentFixture<Comp3640Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3640Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3640Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
