import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4542Component } from './comp-4542.component';

describe('Comp4542Component', () => {
  let component: Comp4542Component;
  let fixture: ComponentFixture<Comp4542Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4542Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4542Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
