import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2984Component } from './comp-2984.component';

describe('Comp2984Component', () => {
  let component: Comp2984Component;
  let fixture: ComponentFixture<Comp2984Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2984Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2984Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
