import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3329Component } from './comp-3329.component';

describe('Comp3329Component', () => {
  let component: Comp3329Component;
  let fixture: ComponentFixture<Comp3329Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3329Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3329Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
