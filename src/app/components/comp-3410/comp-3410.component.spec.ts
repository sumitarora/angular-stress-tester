import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3410Component } from './comp-3410.component';

describe('Comp3410Component', () => {
  let component: Comp3410Component;
  let fixture: ComponentFixture<Comp3410Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3410Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
