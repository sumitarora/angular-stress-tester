import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3244Component } from './comp-3244.component';

describe('Comp3244Component', () => {
  let component: Comp3244Component;
  let fixture: ComponentFixture<Comp3244Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3244Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});