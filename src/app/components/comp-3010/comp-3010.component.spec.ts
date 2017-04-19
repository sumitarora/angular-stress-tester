import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3010Component } from './comp-3010.component';

describe('Comp3010Component', () => {
  let component: Comp3010Component;
  let fixture: ComponentFixture<Comp3010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});