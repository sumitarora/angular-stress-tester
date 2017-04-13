import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2615Component } from './comp-2615.component';

describe('Comp2615Component', () => {
  let component: Comp2615Component;
  let fixture: ComponentFixture<Comp2615Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2615Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
