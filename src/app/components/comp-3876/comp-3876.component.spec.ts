import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3876Component } from './comp-3876.component';

describe('Comp3876Component', () => {
  let component: Comp3876Component;
  let fixture: ComponentFixture<Comp3876Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3876Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
