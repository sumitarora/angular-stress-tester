import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2713Component } from './comp-2713.component';

describe('Comp2713Component', () => {
  let component: Comp2713Component;
  let fixture: ComponentFixture<Comp2713Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2713Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
