import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2327Component } from './comp-2327.component';

describe('Comp2327Component', () => {
  let component: Comp2327Component;
  let fixture: ComponentFixture<Comp2327Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2327Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2327Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
