import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3048Component } from './comp-3048.component';

describe('Comp3048Component', () => {
  let component: Comp3048Component;
  let fixture: ComponentFixture<Comp3048Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3048Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3048Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
