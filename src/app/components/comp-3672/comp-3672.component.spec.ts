import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3672Component } from './comp-3672.component';

describe('Comp3672Component', () => {
  let component: Comp3672Component;
  let fixture: ComponentFixture<Comp3672Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3672Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3672Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
