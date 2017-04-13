import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4239Component } from './comp-4239.component';

describe('Comp4239Component', () => {
  let component: Comp4239Component;
  let fixture: ComponentFixture<Comp4239Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4239Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
