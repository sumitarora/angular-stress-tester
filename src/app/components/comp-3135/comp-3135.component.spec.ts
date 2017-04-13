import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3135Component } from './comp-3135.component';

describe('Comp3135Component', () => {
  let component: Comp3135Component;
  let fixture: ComponentFixture<Comp3135Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3135Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
