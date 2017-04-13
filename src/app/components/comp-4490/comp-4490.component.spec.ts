import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4490Component } from './comp-4490.component';

describe('Comp4490Component', () => {
  let component: Comp4490Component;
  let fixture: ComponentFixture<Comp4490Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4490Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4490Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
