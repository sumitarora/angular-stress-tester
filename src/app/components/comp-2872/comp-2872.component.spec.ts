import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2872Component } from './comp-2872.component';

describe('Comp2872Component', () => {
  let component: Comp2872Component;
  let fixture: ComponentFixture<Comp2872Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2872Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2872Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});