import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4760Component } from './comp-4760.component';

describe('Comp4760Component', () => {
  let component: Comp4760Component;
  let fixture: ComponentFixture<Comp4760Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4760Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
