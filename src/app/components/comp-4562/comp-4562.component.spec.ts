import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4562Component } from './comp-4562.component';

describe('Comp4562Component', () => {
  let component: Comp4562Component;
  let fixture: ComponentFixture<Comp4562Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4562Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4562Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
