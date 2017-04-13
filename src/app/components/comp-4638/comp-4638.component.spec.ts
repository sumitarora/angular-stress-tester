import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4638Component } from './comp-4638.component';

describe('Comp4638Component', () => {
  let component: Comp4638Component;
  let fixture: ComponentFixture<Comp4638Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4638Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4638Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
