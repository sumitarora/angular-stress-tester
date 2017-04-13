import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4633Component } from './comp-4633.component';

describe('Comp4633Component', () => {
  let component: Comp4633Component;
  let fixture: ComponentFixture<Comp4633Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4633Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4633Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
