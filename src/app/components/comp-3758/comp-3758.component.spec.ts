import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3758Component } from './comp-3758.component';

describe('Comp3758Component', () => {
  let component: Comp3758Component;
  let fixture: ComponentFixture<Comp3758Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3758Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
