import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4597Component } from './comp-4597.component';

describe('Comp4597Component', () => {
  let component: Comp4597Component;
  let fixture: ComponentFixture<Comp4597Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4597Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4597Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
