import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3788Component } from './comp-3788.component';

describe('Comp3788Component', () => {
  let component: Comp3788Component;
  let fixture: ComponentFixture<Comp3788Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3788Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3788Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
