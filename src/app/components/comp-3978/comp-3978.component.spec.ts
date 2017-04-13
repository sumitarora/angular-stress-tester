import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3978Component } from './comp-3978.component';

describe('Comp3978Component', () => {
  let component: Comp3978Component;
  let fixture: ComponentFixture<Comp3978Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3978Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3978Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
