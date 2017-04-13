import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4727Component } from './comp-4727.component';

describe('Comp4727Component', () => {
  let component: Comp4727Component;
  let fixture: ComponentFixture<Comp4727Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4727Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4727Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
