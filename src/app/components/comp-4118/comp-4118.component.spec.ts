import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4118Component } from './comp-4118.component';

describe('Comp4118Component', () => {
  let component: Comp4118Component;
  let fixture: ComponentFixture<Comp4118Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4118Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
