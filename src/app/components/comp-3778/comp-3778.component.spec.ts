import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3778Component } from './comp-3778.component';

describe('Comp3778Component', () => {
  let component: Comp3778Component;
  let fixture: ComponentFixture<Comp3778Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3778Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3778Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
