import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4411Component } from './comp-4411.component';

describe('Comp4411Component', () => {
  let component: Comp4411Component;
  let fixture: ComponentFixture<Comp4411Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4411Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
