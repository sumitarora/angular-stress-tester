import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4244Component } from './comp-4244.component';

describe('Comp4244Component', () => {
  let component: Comp4244Component;
  let fixture: ComponentFixture<Comp4244Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4244Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
