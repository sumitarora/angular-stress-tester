import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1067Component } from './comp-1067.component';

describe('Comp1067Component', () => {
  let component: Comp1067Component;
  let fixture: ComponentFixture<Comp1067Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1067Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1067Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
