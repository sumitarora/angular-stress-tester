import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4023Component } from './comp-4023.component';

describe('Comp4023Component', () => {
  let component: Comp4023Component;
  let fixture: ComponentFixture<Comp4023Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4023Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
