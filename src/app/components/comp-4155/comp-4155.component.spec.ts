import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4155Component } from './comp-4155.component';

describe('Comp4155Component', () => {
  let component: Comp4155Component;
  let fixture: ComponentFixture<Comp4155Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4155Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
