import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3374Component } from './comp-3374.component';

describe('Comp3374Component', () => {
  let component: Comp3374Component;
  let fixture: ComponentFixture<Comp3374Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3374Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
