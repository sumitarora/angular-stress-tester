import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4898Component } from './comp-4898.component';

describe('Comp4898Component', () => {
  let component: Comp4898Component;
  let fixture: ComponentFixture<Comp4898Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4898Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4898Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
