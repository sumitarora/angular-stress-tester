import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3213Component } from './comp-3213.component';

describe('Comp3213Component', () => {
  let component: Comp3213Component;
  let fixture: ComponentFixture<Comp3213Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3213Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
