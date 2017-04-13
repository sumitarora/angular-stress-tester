import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2305Component } from './comp-2305.component';

describe('Comp2305Component', () => {
  let component: Comp2305Component;
  let fixture: ComponentFixture<Comp2305Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2305Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
