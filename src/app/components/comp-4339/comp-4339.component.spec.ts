import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4339Component } from './comp-4339.component';

describe('Comp4339Component', () => {
  let component: Comp4339Component;
  let fixture: ComponentFixture<Comp4339Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4339Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
