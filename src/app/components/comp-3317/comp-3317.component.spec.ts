import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3317Component } from './comp-3317.component';

describe('Comp3317Component', () => {
  let component: Comp3317Component;
  let fixture: ComponentFixture<Comp3317Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3317Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
