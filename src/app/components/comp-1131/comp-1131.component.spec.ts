import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1131Component } from './comp-1131.component';

describe('Comp1131Component', () => {
  let component: Comp1131Component;
  let fixture: ComponentFixture<Comp1131Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1131Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
