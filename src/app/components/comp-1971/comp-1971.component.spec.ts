import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1971Component } from './comp-1971.component';

describe('Comp1971Component', () => {
  let component: Comp1971Component;
  let fixture: ComponentFixture<Comp1971Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1971Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1971Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
