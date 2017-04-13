import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3585Component } from './comp-3585.component';

describe('Comp3585Component', () => {
  let component: Comp3585Component;
  let fixture: ComponentFixture<Comp3585Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3585Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3585Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
