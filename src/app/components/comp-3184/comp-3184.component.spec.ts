import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3184Component } from './comp-3184.component';

describe('Comp3184Component', () => {
  let component: Comp3184Component;
  let fixture: ComponentFixture<Comp3184Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3184Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
