import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2102Component } from './comp-2102.component';

describe('Comp2102Component', () => {
  let component: Comp2102Component;
  let fixture: ComponentFixture<Comp2102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
