import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3644Component } from './comp-3644.component';

describe('Comp3644Component', () => {
  let component: Comp3644Component;
  let fixture: ComponentFixture<Comp3644Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3644Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3644Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
