import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1972Component } from './comp-1972.component';

describe('Comp1972Component', () => {
  let component: Comp1972Component;
  let fixture: ComponentFixture<Comp1972Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1972Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1972Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
