import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3163Component } from './comp-3163.component';

describe('Comp3163Component', () => {
  let component: Comp3163Component;
  let fixture: ComponentFixture<Comp3163Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3163Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
