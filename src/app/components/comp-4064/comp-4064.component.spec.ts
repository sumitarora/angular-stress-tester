import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4064Component } from './comp-4064.component';

describe('Comp4064Component', () => {
  let component: Comp4064Component;
  let fixture: ComponentFixture<Comp4064Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4064Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4064Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
