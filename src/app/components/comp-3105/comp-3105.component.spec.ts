import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3105Component } from './comp-3105.component';

describe('Comp3105Component', () => {
  let component: Comp3105Component;
  let fixture: ComponentFixture<Comp3105Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3105Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
