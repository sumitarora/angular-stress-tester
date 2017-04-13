import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3273Component } from './comp-3273.component';

describe('Comp3273Component', () => {
  let component: Comp3273Component;
  let fixture: ComponentFixture<Comp3273Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3273Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
