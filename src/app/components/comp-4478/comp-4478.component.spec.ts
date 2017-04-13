import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4478Component } from './comp-4478.component';

describe('Comp4478Component', () => {
  let component: Comp4478Component;
  let fixture: ComponentFixture<Comp4478Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4478Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4478Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
