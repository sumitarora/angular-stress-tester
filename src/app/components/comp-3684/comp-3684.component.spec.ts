import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3684Component } from './comp-3684.component';

describe('Comp3684Component', () => {
  let component: Comp3684Component;
  let fixture: ComponentFixture<Comp3684Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3684Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3684Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
