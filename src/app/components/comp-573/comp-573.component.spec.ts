import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp573Component } from './comp-573.component';

describe('Comp573Component', () => {
  let component: Comp573Component;
  let fixture: ComponentFixture<Comp573Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp573Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp573Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
