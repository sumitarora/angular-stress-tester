import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2123Component } from './comp-2123.component';

describe('Comp2123Component', () => {
  let component: Comp2123Component;
  let fixture: ComponentFixture<Comp2123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
