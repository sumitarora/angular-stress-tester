import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3701Component } from './comp-3701.component';

describe('Comp3701Component', () => {
  let component: Comp3701Component;
  let fixture: ComponentFixture<Comp3701Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3701Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});