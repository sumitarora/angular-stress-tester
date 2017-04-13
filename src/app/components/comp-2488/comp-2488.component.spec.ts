import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2488Component } from './comp-2488.component';

describe('Comp2488Component', () => {
  let component: Comp2488Component;
  let fixture: ComponentFixture<Comp2488Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2488Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
