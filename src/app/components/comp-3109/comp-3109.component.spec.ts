import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3109Component } from './comp-3109.component';

describe('Comp3109Component', () => {
  let component: Comp3109Component;
  let fixture: ComponentFixture<Comp3109Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3109Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
