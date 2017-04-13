import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3104Component } from './comp-3104.component';

describe('Comp3104Component', () => {
  let component: Comp3104Component;
  let fixture: ComponentFixture<Comp3104Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3104Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
