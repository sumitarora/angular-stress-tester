import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3156Component } from './comp-3156.component';

describe('Comp3156Component', () => {
  let component: Comp3156Component;
  let fixture: ComponentFixture<Comp3156Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3156Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
