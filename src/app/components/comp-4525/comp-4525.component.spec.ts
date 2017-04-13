import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4525Component } from './comp-4525.component';

describe('Comp4525Component', () => {
  let component: Comp4525Component;
  let fixture: ComponentFixture<Comp4525Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4525Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4525Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
