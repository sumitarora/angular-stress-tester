import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3155Component } from './comp-3155.component';

describe('Comp3155Component', () => {
  let component: Comp3155Component;
  let fixture: ComponentFixture<Comp3155Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3155Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
