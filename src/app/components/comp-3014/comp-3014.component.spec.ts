import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3014Component } from './comp-3014.component';

describe('Comp3014Component', () => {
  let component: Comp3014Component;
  let fixture: ComponentFixture<Comp3014Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3014Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
