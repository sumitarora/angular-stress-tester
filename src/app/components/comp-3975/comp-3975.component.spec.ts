import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3975Component } from './comp-3975.component';

describe('Comp3975Component', () => {
  let component: Comp3975Component;
  let fixture: ComponentFixture<Comp3975Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3975Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3975Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
