import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1195Component } from './comp-1195.component';

describe('Comp1195Component', () => {
  let component: Comp1195Component;
  let fixture: ComponentFixture<Comp1195Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1195Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
