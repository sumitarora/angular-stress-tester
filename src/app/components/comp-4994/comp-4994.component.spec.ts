import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4994Component } from './comp-4994.component';

describe('Comp4994Component', () => {
  let component: Comp4994Component;
  let fixture: ComponentFixture<Comp4994Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4994Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4994Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
