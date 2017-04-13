import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4635Component } from './comp-4635.component';

describe('Comp4635Component', () => {
  let component: Comp4635Component;
  let fixture: ComponentFixture<Comp4635Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4635Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4635Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
