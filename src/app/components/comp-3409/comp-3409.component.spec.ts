import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3409Component } from './comp-3409.component';

describe('Comp3409Component', () => {
  let component: Comp3409Component;
  let fixture: ComponentFixture<Comp3409Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3409Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
