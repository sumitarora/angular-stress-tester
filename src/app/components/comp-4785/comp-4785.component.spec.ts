import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4785Component } from './comp-4785.component';

describe('Comp4785Component', () => {
  let component: Comp4785Component;
  let fixture: ComponentFixture<Comp4785Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4785Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4785Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
