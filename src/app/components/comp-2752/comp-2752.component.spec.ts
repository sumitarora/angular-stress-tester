import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2752Component } from './comp-2752.component';

describe('Comp2752Component', () => {
  let component: Comp2752Component;
  let fixture: ComponentFixture<Comp2752Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2752Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2752Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
