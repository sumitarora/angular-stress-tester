import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3936Component } from './comp-3936.component';

describe('Comp3936Component', () => {
  let component: Comp3936Component;
  let fixture: ComponentFixture<Comp3936Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3936Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3936Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
