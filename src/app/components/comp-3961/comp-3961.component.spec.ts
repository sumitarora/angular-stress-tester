import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3961Component } from './comp-3961.component';

describe('Comp3961Component', () => {
  let component: Comp3961Component;
  let fixture: ComponentFixture<Comp3961Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3961Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3961Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
