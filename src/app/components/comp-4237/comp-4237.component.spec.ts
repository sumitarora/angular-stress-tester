import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4237Component } from './comp-4237.component';

describe('Comp4237Component', () => {
  let component: Comp4237Component;
  let fixture: ComponentFixture<Comp4237Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4237Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
