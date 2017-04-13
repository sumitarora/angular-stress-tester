import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4394Component } from './comp-4394.component';

describe('Comp4394Component', () => {
  let component: Comp4394Component;
  let fixture: ComponentFixture<Comp4394Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4394Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
