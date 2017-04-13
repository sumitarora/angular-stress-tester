import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp81Component } from './comp-81.component';

describe('Comp81Component', () => {
  let component: Comp81Component;
  let fixture: ComponentFixture<Comp81Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp81Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
