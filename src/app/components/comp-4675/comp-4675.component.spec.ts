import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4675Component } from './comp-4675.component';

describe('Comp4675Component', () => {
  let component: Comp4675Component;
  let fixture: ComponentFixture<Comp4675Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4675Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4675Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
