import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4903Component } from './comp-4903.component';

describe('Comp4903Component', () => {
  let component: Comp4903Component;
  let fixture: ComponentFixture<Comp4903Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4903Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4903Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
