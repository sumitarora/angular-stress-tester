import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3420Component } from './comp-3420.component';

describe('Comp3420Component', () => {
  let component: Comp3420Component;
  let fixture: ComponentFixture<Comp3420Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3420Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
