import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4255Component } from './comp-4255.component';

describe('Comp4255Component', () => {
  let component: Comp4255Component;
  let fixture: ComponentFixture<Comp4255Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4255Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
