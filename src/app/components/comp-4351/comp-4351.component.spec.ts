import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4351Component } from './comp-4351.component';

describe('Comp4351Component', () => {
  let component: Comp4351Component;
  let fixture: ComponentFixture<Comp4351Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4351Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
