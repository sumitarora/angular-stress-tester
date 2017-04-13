import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3818Component } from './comp-3818.component';

describe('Comp3818Component', () => {
  let component: Comp3818Component;
  let fixture: ComponentFixture<Comp3818Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3818Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3818Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
