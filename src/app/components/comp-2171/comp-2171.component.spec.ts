import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2171Component } from './comp-2171.component';

describe('Comp2171Component', () => {
  let component: Comp2171Component;
  let fixture: ComponentFixture<Comp2171Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2171Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
