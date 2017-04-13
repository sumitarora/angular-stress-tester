import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3240Component } from './comp-3240.component';

describe('Comp3240Component', () => {
  let component: Comp3240Component;
  let fixture: ComponentFixture<Comp3240Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3240Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
