import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4876Component } from './comp-4876.component';

describe('Comp4876Component', () => {
  let component: Comp4876Component;
  let fixture: ComponentFixture<Comp4876Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4876Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
