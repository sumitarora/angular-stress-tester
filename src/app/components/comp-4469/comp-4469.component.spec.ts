import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4469Component } from './comp-4469.component';

describe('Comp4469Component', () => {
  let component: Comp4469Component;
  let fixture: ComponentFixture<Comp4469Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4469Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
