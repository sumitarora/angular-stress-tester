import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3011Component } from './comp-3011.component';

describe('Comp3011Component', () => {
  let component: Comp3011Component;
  let fixture: ComponentFixture<Comp3011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
