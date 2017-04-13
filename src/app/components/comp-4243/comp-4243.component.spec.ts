import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4243Component } from './comp-4243.component';

describe('Comp4243Component', () => {
  let component: Comp4243Component;
  let fixture: ComponentFixture<Comp4243Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4243Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
