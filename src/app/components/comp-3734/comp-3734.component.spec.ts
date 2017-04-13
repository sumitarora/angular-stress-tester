import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3734Component } from './comp-3734.component';

describe('Comp3734Component', () => {
  let component: Comp3734Component;
  let fixture: ComponentFixture<Comp3734Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3734Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3734Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
