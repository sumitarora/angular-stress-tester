import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4572Component } from './comp-4572.component';

describe('Comp4572Component', () => {
  let component: Comp4572Component;
  let fixture: ComponentFixture<Comp4572Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4572Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4572Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
