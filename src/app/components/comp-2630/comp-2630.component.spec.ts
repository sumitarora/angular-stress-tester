import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2630Component } from './comp-2630.component';

describe('Comp2630Component', () => {
  let component: Comp2630Component;
  let fixture: ComponentFixture<Comp2630Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2630Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
