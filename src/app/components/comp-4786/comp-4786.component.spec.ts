import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4786Component } from './comp-4786.component';

describe('Comp4786Component', () => {
  let component: Comp4786Component;
  let fixture: ComponentFixture<Comp4786Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4786Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4786Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
