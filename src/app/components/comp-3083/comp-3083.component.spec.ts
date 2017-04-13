import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3083Component } from './comp-3083.component';

describe('Comp3083Component', () => {
  let component: Comp3083Component;
  let fixture: ComponentFixture<Comp3083Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3083Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3083Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
