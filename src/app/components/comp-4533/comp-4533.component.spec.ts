import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4533Component } from './comp-4533.component';

describe('Comp4533Component', () => {
  let component: Comp4533Component;
  let fixture: ComponentFixture<Comp4533Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4533Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4533Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
