import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3674Component } from './comp-3674.component';

describe('Comp3674Component', () => {
  let component: Comp3674Component;
  let fixture: ComponentFixture<Comp3674Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3674Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3674Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
