import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3617Component } from './comp-3617.component';

describe('Comp3617Component', () => {
  let component: Comp3617Component;
  let fixture: ComponentFixture<Comp3617Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3617Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3617Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
