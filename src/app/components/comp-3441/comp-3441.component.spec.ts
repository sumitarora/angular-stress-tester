import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3441Component } from './comp-3441.component';

describe('Comp3441Component', () => {
  let component: Comp3441Component;
  let fixture: ComponentFixture<Comp3441Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3441Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
