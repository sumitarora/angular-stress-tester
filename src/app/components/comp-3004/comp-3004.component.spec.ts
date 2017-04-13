import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3004Component } from './comp-3004.component';

describe('Comp3004Component', () => {
  let component: Comp3004Component;
  let fixture: ComponentFixture<Comp3004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
