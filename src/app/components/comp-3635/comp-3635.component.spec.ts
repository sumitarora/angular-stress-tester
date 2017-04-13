import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3635Component } from './comp-3635.component';

describe('Comp3635Component', () => {
  let component: Comp3635Component;
  let fixture: ComponentFixture<Comp3635Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3635Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3635Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
