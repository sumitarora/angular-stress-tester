import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4134Component } from './comp-4134.component';

describe('Comp4134Component', () => {
  let component: Comp4134Component;
  let fixture: ComponentFixture<Comp4134Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4134Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
