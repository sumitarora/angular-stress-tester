import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3499Component } from './comp-3499.component';

describe('Comp3499Component', () => {
  let component: Comp3499Component;
  let fixture: ComponentFixture<Comp3499Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3499Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
