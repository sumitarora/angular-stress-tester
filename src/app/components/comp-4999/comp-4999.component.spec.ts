import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4999Component } from './comp-4999.component';

describe('Comp4999Component', () => {
  let component: Comp4999Component;
  let fixture: ComponentFixture<Comp4999Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4999Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
