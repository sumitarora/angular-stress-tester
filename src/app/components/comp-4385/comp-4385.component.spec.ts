import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4385Component } from './comp-4385.component';

describe('Comp4385Component', () => {
  let component: Comp4385Component;
  let fixture: ComponentFixture<Comp4385Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4385Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
