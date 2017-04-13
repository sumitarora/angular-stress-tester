import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2435Component } from './comp-2435.component';

describe('Comp2435Component', () => {
  let component: Comp2435Component;
  let fixture: ComponentFixture<Comp2435Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2435Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
