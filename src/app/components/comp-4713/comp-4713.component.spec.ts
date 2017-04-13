import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4713Component } from './comp-4713.component';

describe('Comp4713Component', () => {
  let component: Comp4713Component;
  let fixture: ComponentFixture<Comp4713Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4713Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
