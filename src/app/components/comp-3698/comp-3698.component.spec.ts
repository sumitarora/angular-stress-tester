import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3698Component } from './comp-3698.component';

describe('Comp3698Component', () => {
  let component: Comp3698Component;
  let fixture: ComponentFixture<Comp3698Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3698Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3698Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
