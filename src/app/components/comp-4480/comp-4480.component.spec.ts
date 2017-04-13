import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4480Component } from './comp-4480.component';

describe('Comp4480Component', () => {
  let component: Comp4480Component;
  let fixture: ComponentFixture<Comp4480Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4480Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4480Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
