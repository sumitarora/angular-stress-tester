import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4647Component } from './comp-4647.component';

describe('Comp4647Component', () => {
  let component: Comp4647Component;
  let fixture: ComponentFixture<Comp4647Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4647Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4647Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
