import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3529Component } from './comp-3529.component';

describe('Comp3529Component', () => {
  let component: Comp3529Component;
  let fixture: ComponentFixture<Comp3529Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3529Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3529Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
