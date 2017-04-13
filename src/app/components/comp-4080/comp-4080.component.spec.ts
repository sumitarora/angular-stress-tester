import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4080Component } from './comp-4080.component';

describe('Comp4080Component', () => {
  let component: Comp4080Component;
  let fixture: ComponentFixture<Comp4080Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4080Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4080Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
