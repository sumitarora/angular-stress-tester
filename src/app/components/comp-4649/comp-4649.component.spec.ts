import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4649Component } from './comp-4649.component';

describe('Comp4649Component', () => {
  let component: Comp4649Component;
  let fixture: ComponentFixture<Comp4649Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4649Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4649Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
