import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4879Component } from './comp-4879.component';

describe('Comp4879Component', () => {
  let component: Comp4879Component;
  let fixture: ComponentFixture<Comp4879Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4879Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4879Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
