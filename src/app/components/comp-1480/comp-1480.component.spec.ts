import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1480Component } from './comp-1480.component';

describe('Comp1480Component', () => {
  let component: Comp1480Component;
  let fixture: ComponentFixture<Comp1480Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1480Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1480Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
