import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3887Component } from './comp-3887.component';

describe('Comp3887Component', () => {
  let component: Comp3887Component;
  let fixture: ComponentFixture<Comp3887Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3887Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3887Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
