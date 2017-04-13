import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3218Component } from './comp-3218.component';

describe('Comp3218Component', () => {
  let component: Comp3218Component;
  let fixture: ComponentFixture<Comp3218Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3218Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
