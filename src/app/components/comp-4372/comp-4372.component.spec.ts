import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4372Component } from './comp-4372.component';

describe('Comp4372Component', () => {
  let component: Comp4372Component;
  let fixture: ComponentFixture<Comp4372Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4372Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
