import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3002Component } from './comp-3002.component';

describe('Comp3002Component', () => {
  let component: Comp3002Component;
  let fixture: ComponentFixture<Comp3002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
