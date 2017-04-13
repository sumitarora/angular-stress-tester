import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3836Component } from './comp-3836.component';

describe('Comp3836Component', () => {
  let component: Comp3836Component;
  let fixture: ComponentFixture<Comp3836Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3836Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3836Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
