import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4614Component } from './comp-4614.component';

describe('Comp4614Component', () => {
  let component: Comp4614Component;
  let fixture: ComponentFixture<Comp4614Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4614Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4614Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
