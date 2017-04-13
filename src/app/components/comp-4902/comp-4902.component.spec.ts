import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4902Component } from './comp-4902.component';

describe('Comp4902Component', () => {
  let component: Comp4902Component;
  let fixture: ComponentFixture<Comp4902Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4902Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
