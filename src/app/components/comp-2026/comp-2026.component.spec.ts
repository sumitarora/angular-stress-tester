import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2026Component } from './comp-2026.component';

describe('Comp2026Component', () => {
  let component: Comp2026Component;
  let fixture: ComponentFixture<Comp2026Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2026Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
