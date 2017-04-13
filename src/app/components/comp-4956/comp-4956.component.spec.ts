import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4956Component } from './comp-4956.component';

describe('Comp4956Component', () => {
  let component: Comp4956Component;
  let fixture: ComponentFixture<Comp4956Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4956Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4956Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
