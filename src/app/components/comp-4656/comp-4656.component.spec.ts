import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4656Component } from './comp-4656.component';

describe('Comp4656Component', () => {
  let component: Comp4656Component;
  let fixture: ComponentFixture<Comp4656Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4656Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4656Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
