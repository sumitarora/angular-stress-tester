import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4190Component } from './comp-4190.component';

describe('Comp4190Component', () => {
  let component: Comp4190Component;
  let fixture: ComponentFixture<Comp4190Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4190Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
