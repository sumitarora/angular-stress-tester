import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4191Component } from './comp-4191.component';

describe('Comp4191Component', () => {
  let component: Comp4191Component;
  let fixture: ComponentFixture<Comp4191Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4191Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
