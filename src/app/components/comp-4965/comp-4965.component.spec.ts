import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4965Component } from './comp-4965.component';

describe('Comp4965Component', () => {
  let component: Comp4965Component;
  let fixture: ComponentFixture<Comp4965Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4965Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4965Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});