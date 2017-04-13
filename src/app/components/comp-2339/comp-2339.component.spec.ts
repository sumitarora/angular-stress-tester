import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2339Component } from './comp-2339.component';

describe('Comp2339Component', () => {
  let component: Comp2339Component;
  let fixture: ComponentFixture<Comp2339Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2339Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
