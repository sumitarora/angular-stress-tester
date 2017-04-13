import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4431Component } from './comp-4431.component';

describe('Comp4431Component', () => {
  let component: Comp4431Component;
  let fixture: ComponentFixture<Comp4431Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4431Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4431Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
