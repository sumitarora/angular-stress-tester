import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3094Component } from './comp-3094.component';

describe('Comp3094Component', () => {
  let component: Comp3094Component;
  let fixture: ComponentFixture<Comp3094Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3094Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3094Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
