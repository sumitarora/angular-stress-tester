import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2326Component } from './comp-2326.component';

describe('Comp2326Component', () => {
  let component: Comp2326Component;
  let fixture: ComponentFixture<Comp2326Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2326Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
