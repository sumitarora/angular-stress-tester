import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1965Component } from './comp-1965.component';

describe('Comp1965Component', () => {
  let component: Comp1965Component;
  let fixture: ComponentFixture<Comp1965Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1965Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1965Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
