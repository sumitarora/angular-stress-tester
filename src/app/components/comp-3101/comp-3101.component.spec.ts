import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3101Component } from './comp-3101.component';

describe('Comp3101Component', () => {
  let component: Comp3101Component;
  let fixture: ComponentFixture<Comp3101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
