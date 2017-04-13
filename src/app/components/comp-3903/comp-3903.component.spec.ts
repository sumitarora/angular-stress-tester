import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3903Component } from './comp-3903.component';

describe('Comp3903Component', () => {
  let component: Comp3903Component;
  let fixture: ComponentFixture<Comp3903Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3903Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3903Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
