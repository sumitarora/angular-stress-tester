import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4020Component } from './comp-4020.component';

describe('Comp4020Component', () => {
  let component: Comp4020Component;
  let fixture: ComponentFixture<Comp4020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
