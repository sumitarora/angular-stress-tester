import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4973Component } from './comp-4973.component';

describe('Comp4973Component', () => {
  let component: Comp4973Component;
  let fixture: ComponentFixture<Comp4973Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4973Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4973Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
