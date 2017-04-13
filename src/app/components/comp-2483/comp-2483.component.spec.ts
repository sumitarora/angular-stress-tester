import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2483Component } from './comp-2483.component';

describe('Comp2483Component', () => {
  let component: Comp2483Component;
  let fixture: ComponentFixture<Comp2483Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2483Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2483Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
