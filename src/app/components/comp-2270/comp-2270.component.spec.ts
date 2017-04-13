import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2270Component } from './comp-2270.component';

describe('Comp2270Component', () => {
  let component: Comp2270Component;
  let fixture: ComponentFixture<Comp2270Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2270Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
