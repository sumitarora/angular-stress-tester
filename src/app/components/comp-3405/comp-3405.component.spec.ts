import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3405Component } from './comp-3405.component';

describe('Comp3405Component', () => {
  let component: Comp3405Component;
  let fixture: ComponentFixture<Comp3405Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3405Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
