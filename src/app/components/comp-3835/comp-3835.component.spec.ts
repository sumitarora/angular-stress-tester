import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3835Component } from './comp-3835.component';

describe('Comp3835Component', () => {
  let component: Comp3835Component;
  let fixture: ComponentFixture<Comp3835Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3835Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3835Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
