import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2555Component } from './comp-2555.component';

describe('Comp2555Component', () => {
  let component: Comp2555Component;
  let fixture: ComponentFixture<Comp2555Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2555Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2555Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
