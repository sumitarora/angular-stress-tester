import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3234Component } from './comp-3234.component';

describe('Comp3234Component', () => {
  let component: Comp3234Component;
  let fixture: ComponentFixture<Comp3234Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3234Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
