import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3172Component } from './comp-3172.component';

describe('Comp3172Component', () => {
  let component: Comp3172Component;
  let fixture: ComponentFixture<Comp3172Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3172Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
