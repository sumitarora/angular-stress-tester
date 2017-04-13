import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2631Component } from './comp-2631.component';

describe('Comp2631Component', () => {
  let component: Comp2631Component;
  let fixture: ComponentFixture<Comp2631Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2631Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2631Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
