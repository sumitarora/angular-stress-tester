import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4014Component } from './comp-4014.component';

describe('Comp4014Component', () => {
  let component: Comp4014Component;
  let fixture: ComponentFixture<Comp4014Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4014Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
