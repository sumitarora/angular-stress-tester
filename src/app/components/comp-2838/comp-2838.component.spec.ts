import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2838Component } from './comp-2838.component';

describe('Comp2838Component', () => {
  let component: Comp2838Component;
  let fixture: ComponentFixture<Comp2838Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2838Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2838Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
