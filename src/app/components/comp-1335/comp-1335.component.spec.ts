import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1335Component } from './comp-1335.component';

describe('Comp1335Component', () => {
  let component: Comp1335Component;
  let fixture: ComponentFixture<Comp1335Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1335Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1335Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
