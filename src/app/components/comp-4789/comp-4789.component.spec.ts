import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4789Component } from './comp-4789.component';

describe('Comp4789Component', () => {
  let component: Comp4789Component;
  let fixture: ComponentFixture<Comp4789Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4789Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4789Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
