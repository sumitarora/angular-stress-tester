import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3198Component } from './comp-3198.component';

describe('Comp3198Component', () => {
  let component: Comp3198Component;
  let fixture: ComponentFixture<Comp3198Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3198Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
