import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp927Component } from './comp-927.component';

describe('Comp927Component', () => {
  let component: Comp927Component;
  let fixture: ComponentFixture<Comp927Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp927Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp927Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
