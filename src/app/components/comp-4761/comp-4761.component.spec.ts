import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4761Component } from './comp-4761.component';

describe('Comp4761Component', () => {
  let component: Comp4761Component;
  let fixture: ComponentFixture<Comp4761Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4761Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4761Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
