import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4021Component } from './comp-4021.component';

describe('Comp4021Component', () => {
  let component: Comp4021Component;
  let fixture: ComponentFixture<Comp4021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
