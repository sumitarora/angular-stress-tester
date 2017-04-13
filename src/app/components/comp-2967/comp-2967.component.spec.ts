import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2967Component } from './comp-2967.component';

describe('Comp2967Component', () => {
  let component: Comp2967Component;
  let fixture: ComponentFixture<Comp2967Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2967Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2967Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
