import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4503Component } from './comp-4503.component';

describe('Comp4503Component', () => {
  let component: Comp4503Component;
  let fixture: ComponentFixture<Comp4503Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4503Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
