import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2879Component } from './comp-2879.component';

describe('Comp2879Component', () => {
  let component: Comp2879Component;
  let fixture: ComponentFixture<Comp2879Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2879Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2879Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
