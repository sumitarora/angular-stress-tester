import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4459Component } from './comp-4459.component';

describe('Comp4459Component', () => {
  let component: Comp4459Component;
  let fixture: ComponentFixture<Comp4459Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4459Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
