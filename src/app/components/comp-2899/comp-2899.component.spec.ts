import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2899Component } from './comp-2899.component';

describe('Comp2899Component', () => {
  let component: Comp2899Component;
  let fixture: ComponentFixture<Comp2899Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2899Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2899Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
