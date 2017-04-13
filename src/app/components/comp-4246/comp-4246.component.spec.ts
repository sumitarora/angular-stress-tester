import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4246Component } from './comp-4246.component';

describe('Comp4246Component', () => {
  let component: Comp4246Component;
  let fixture: ComponentFixture<Comp4246Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4246Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
