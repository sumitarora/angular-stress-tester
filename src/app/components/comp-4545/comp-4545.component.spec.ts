import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4545Component } from './comp-4545.component';

describe('Comp4545Component', () => {
  let component: Comp4545Component;
  let fixture: ComponentFixture<Comp4545Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4545Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4545Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
