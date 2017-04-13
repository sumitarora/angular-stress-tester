import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4867Component } from './comp-4867.component';

describe('Comp4867Component', () => {
  let component: Comp4867Component;
  let fixture: ComponentFixture<Comp4867Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4867Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4867Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
