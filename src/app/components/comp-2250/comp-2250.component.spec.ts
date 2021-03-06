import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2250Component } from './comp-2250.component';

describe('Comp2250Component', () => {
  let component: Comp2250Component;
  let fixture: ComponentFixture<Comp2250Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2250Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
