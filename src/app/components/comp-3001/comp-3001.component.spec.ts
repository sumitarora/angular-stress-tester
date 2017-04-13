import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3001Component } from './comp-3001.component';

describe('Comp3001Component', () => {
  let component: Comp3001Component;
  let fixture: ComponentFixture<Comp3001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
