import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2333Component } from './comp-2333.component';

describe('Comp2333Component', () => {
  let component: Comp2333Component;
  let fixture: ComponentFixture<Comp2333Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2333Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
