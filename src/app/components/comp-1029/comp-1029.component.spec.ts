import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1029Component } from './comp-1029.component';

describe('Comp1029Component', () => {
  let component: Comp1029Component;
  let fixture: ComponentFixture<Comp1029Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1029Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1029Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
