import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3450Component } from './comp-3450.component';

describe('Comp3450Component', () => {
  let component: Comp3450Component;
  let fixture: ComponentFixture<Comp3450Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3450Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
