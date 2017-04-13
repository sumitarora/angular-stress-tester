import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4143Component } from './comp-4143.component';

describe('Comp4143Component', () => {
  let component: Comp4143Component;
  let fixture: ComponentFixture<Comp4143Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4143Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
