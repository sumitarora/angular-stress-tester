import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1621Component } from './comp-1621.component';

describe('Comp1621Component', () => {
  let component: Comp1621Component;
  let fixture: ComponentFixture<Comp1621Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1621Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
