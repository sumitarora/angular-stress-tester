import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4555Component } from './comp-4555.component';

describe('Comp4555Component', () => {
  let component: Comp4555Component;
  let fixture: ComponentFixture<Comp4555Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4555Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4555Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
