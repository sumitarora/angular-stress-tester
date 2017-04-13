import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2074Component } from './comp-2074.component';

describe('Comp2074Component', () => {
  let component: Comp2074Component;
  let fixture: ComponentFixture<Comp2074Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2074Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2074Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
