import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3796Component } from './comp-3796.component';

describe('Comp3796Component', () => {
  let component: Comp3796Component;
  let fixture: ComponentFixture<Comp3796Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3796Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3796Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
