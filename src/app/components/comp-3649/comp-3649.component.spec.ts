import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3649Component } from './comp-3649.component';

describe('Comp3649Component', () => {
  let component: Comp3649Component;
  let fixture: ComponentFixture<Comp3649Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3649Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3649Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
