import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3364Component } from './comp-3364.component';

describe('Comp3364Component', () => {
  let component: Comp3364Component;
  let fixture: ComponentFixture<Comp3364Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3364Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
