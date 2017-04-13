import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4805Component } from './comp-4805.component';

describe('Comp4805Component', () => {
  let component: Comp4805Component;
  let fixture: ComponentFixture<Comp4805Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4805Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4805Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
