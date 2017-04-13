import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2950Component } from './comp-2950.component';

describe('Comp2950Component', () => {
  let component: Comp2950Component;
  let fixture: ComponentFixture<Comp2950Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2950Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2950Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
