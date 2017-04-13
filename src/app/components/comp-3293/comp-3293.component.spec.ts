import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3293Component } from './comp-3293.component';

describe('Comp3293Component', () => {
  let component: Comp3293Component;
  let fixture: ComponentFixture<Comp3293Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3293Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
