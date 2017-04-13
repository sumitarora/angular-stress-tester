import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4630Component } from './comp-4630.component';

describe('Comp4630Component', () => {
  let component: Comp4630Component;
  let fixture: ComponentFixture<Comp4630Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4630Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
