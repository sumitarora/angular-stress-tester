import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2186Component } from './comp-2186.component';

describe('Comp2186Component', () => {
  let component: Comp2186Component;
  let fixture: ComponentFixture<Comp2186Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2186Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
