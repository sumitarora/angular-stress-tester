import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2063Component } from './comp-2063.component';

describe('Comp2063Component', () => {
  let component: Comp2063Component;
  let fixture: ComponentFixture<Comp2063Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2063Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2063Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
