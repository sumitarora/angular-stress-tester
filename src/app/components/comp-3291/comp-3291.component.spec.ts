import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3291Component } from './comp-3291.component';

describe('Comp3291Component', () => {
  let component: Comp3291Component;
  let fixture: ComponentFixture<Comp3291Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3291Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
