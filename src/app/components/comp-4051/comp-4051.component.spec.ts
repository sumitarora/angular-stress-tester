import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4051Component } from './comp-4051.component';

describe('Comp4051Component', () => {
  let component: Comp4051Component;
  let fixture: ComponentFixture<Comp4051Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4051Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4051Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
