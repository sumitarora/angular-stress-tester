import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2610Component } from './comp-2610.component';

describe('Comp2610Component', () => {
  let component: Comp2610Component;
  let fixture: ComponentFixture<Comp2610Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2610Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2610Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
