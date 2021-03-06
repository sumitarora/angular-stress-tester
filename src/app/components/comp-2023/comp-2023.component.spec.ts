import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2023Component } from './comp-2023.component';

describe('Comp2023Component', () => {
  let component: Comp2023Component;
  let fixture: ComponentFixture<Comp2023Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2023Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
