import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1841Component } from './comp-1841.component';

describe('Comp1841Component', () => {
  let component: Comp1841Component;
  let fixture: ComponentFixture<Comp1841Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1841Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1841Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
