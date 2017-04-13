import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2104Component } from './comp-2104.component';

describe('Comp2104Component', () => {
  let component: Comp2104Component;
  let fixture: ComponentFixture<Comp2104Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2104Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
