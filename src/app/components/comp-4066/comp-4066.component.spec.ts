import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4066Component } from './comp-4066.component';

describe('Comp4066Component', () => {
  let component: Comp4066Component;
  let fixture: ComponentFixture<Comp4066Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4066Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4066Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
