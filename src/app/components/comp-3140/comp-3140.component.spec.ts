import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3140Component } from './comp-3140.component';

describe('Comp3140Component', () => {
  let component: Comp3140Component;
  let fixture: ComponentFixture<Comp3140Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3140Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
