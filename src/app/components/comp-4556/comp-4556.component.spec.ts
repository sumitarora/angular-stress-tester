import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4556Component } from './comp-4556.component';

describe('Comp4556Component', () => {
  let component: Comp4556Component;
  let fixture: ComponentFixture<Comp4556Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4556Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4556Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
