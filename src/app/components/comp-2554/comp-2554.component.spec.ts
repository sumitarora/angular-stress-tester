import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2554Component } from './comp-2554.component';

describe('Comp2554Component', () => {
  let component: Comp2554Component;
  let fixture: ComponentFixture<Comp2554Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2554Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
