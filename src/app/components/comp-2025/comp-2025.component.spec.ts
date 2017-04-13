import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2025Component } from './comp-2025.component';

describe('Comp2025Component', () => {
  let component: Comp2025Component;
  let fixture: ComponentFixture<Comp2025Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2025Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
