import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2855Component } from './comp-2855.component';

describe('Comp2855Component', () => {
  let component: Comp2855Component;
  let fixture: ComponentFixture<Comp2855Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2855Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2855Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
