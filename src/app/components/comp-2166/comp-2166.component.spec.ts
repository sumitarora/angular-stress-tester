import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2166Component } from './comp-2166.component';

describe('Comp2166Component', () => {
  let component: Comp2166Component;
  let fixture: ComponentFixture<Comp2166Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2166Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
