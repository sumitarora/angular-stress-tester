import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4693Component } from './comp-4693.component';

describe('Comp4693Component', () => {
  let component: Comp4693Component;
  let fixture: ComponentFixture<Comp4693Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4693Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4693Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
