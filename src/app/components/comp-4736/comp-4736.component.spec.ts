import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4736Component } from './comp-4736.component';

describe('Comp4736Component', () => {
  let component: Comp4736Component;
  let fixture: ComponentFixture<Comp4736Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4736Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4736Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
