import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3749Component } from './comp-3749.component';

describe('Comp3749Component', () => {
  let component: Comp3749Component;
  let fixture: ComponentFixture<Comp3749Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3749Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3749Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
