import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4491Component } from './comp-4491.component';

describe('Comp4491Component', () => {
  let component: Comp4491Component;
  let fixture: ComponentFixture<Comp4491Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4491Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
