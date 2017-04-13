import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4421Component } from './comp-4421.component';

describe('Comp4421Component', () => {
  let component: Comp4421Component;
  let fixture: ComponentFixture<Comp4421Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4421Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
