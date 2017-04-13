import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3670Component } from './comp-3670.component';

describe('Comp3670Component', () => {
  let component: Comp3670Component;
  let fixture: ComponentFixture<Comp3670Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3670Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
