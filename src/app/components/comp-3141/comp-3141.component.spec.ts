import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3141Component } from './comp-3141.component';

describe('Comp3141Component', () => {
  let component: Comp3141Component;
  let fixture: ComponentFixture<Comp3141Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3141Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
