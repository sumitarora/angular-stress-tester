import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4055Component } from './comp-4055.component';

describe('Comp4055Component', () => {
  let component: Comp4055Component;
  let fixture: ComponentFixture<Comp4055Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4055Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4055Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
