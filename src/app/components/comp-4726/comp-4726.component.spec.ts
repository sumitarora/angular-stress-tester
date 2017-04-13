import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4726Component } from './comp-4726.component';

describe('Comp4726Component', () => {
  let component: Comp4726Component;
  let fixture: ComponentFixture<Comp4726Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4726Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4726Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
