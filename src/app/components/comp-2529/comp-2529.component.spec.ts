import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2529Component } from './comp-2529.component';

describe('Comp2529Component', () => {
  let component: Comp2529Component;
  let fixture: ComponentFixture<Comp2529Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2529Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2529Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
