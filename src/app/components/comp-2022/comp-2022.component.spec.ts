import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2022Component } from './comp-2022.component';

describe('Comp2022Component', () => {
  let component: Comp2022Component;
  let fixture: ComponentFixture<Comp2022Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2022Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
