import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3408Component } from './comp-3408.component';

describe('Comp3408Component', () => {
  let component: Comp3408Component;
  let fixture: ComponentFixture<Comp3408Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3408Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
