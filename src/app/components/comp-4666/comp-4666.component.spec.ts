import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4666Component } from './comp-4666.component';

describe('Comp4666Component', () => {
  let component: Comp4666Component;
  let fixture: ComponentFixture<Comp4666Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4666Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4666Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
