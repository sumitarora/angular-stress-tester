import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3460Component } from './comp-3460.component';

describe('Comp3460Component', () => {
  let component: Comp3460Component;
  let fixture: ComponentFixture<Comp3460Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3460Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3460Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});