import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1829Component } from './comp-1829.component';

describe('Comp1829Component', () => {
  let component: Comp1829Component;
  let fixture: ComponentFixture<Comp1829Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1829Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1829Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
