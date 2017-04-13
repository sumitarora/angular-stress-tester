import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4901Component } from './comp-4901.component';

describe('Comp4901Component', () => {
  let component: Comp4901Component;
  let fixture: ComponentFixture<Comp4901Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4901Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4901Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
