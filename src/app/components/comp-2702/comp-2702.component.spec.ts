import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2702Component } from './comp-2702.component';

describe('Comp2702Component', () => {
  let component: Comp2702Component;
  let fixture: ComponentFixture<Comp2702Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2702Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
