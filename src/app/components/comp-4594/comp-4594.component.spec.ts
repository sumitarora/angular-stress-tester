import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4594Component } from './comp-4594.component';

describe('Comp4594Component', () => {
  let component: Comp4594Component;
  let fixture: ComponentFixture<Comp4594Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4594Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
