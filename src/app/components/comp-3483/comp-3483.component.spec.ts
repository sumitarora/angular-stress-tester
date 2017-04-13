import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3483Component } from './comp-3483.component';

describe('Comp3483Component', () => {
  let component: Comp3483Component;
  let fixture: ComponentFixture<Comp3483Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3483Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3483Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
