import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2161Component } from './comp-2161.component';

describe('Comp2161Component', () => {
  let component: Comp2161Component;
  let fixture: ComponentFixture<Comp2161Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2161Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
