import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2203Component } from './comp-2203.component';

describe('Comp2203Component', () => {
  let component: Comp2203Component;
  let fixture: ComponentFixture<Comp2203Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2203Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
