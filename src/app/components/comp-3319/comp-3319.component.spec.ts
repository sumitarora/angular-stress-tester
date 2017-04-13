import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3319Component } from './comp-3319.component';

describe('Comp3319Component', () => {
  let component: Comp3319Component;
  let fixture: ComponentFixture<Comp3319Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3319Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
