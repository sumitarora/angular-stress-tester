import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4304Component } from './comp-4304.component';

describe('Comp4304Component', () => {
  let component: Comp4304Component;
  let fixture: ComponentFixture<Comp4304Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4304Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
