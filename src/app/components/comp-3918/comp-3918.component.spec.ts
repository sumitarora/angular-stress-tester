import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3918Component } from './comp-3918.component';

describe('Comp3918Component', () => {
  let component: Comp3918Component;
  let fixture: ComponentFixture<Comp3918Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3918Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3918Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
