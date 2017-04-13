import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4625Component } from './comp-4625.component';

describe('Comp4625Component', () => {
  let component: Comp4625Component;
  let fixture: ComponentFixture<Comp4625Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4625Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4625Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
