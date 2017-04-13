import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3601Component } from './comp-3601.component';

describe('Comp3601Component', () => {
  let component: Comp3601Component;
  let fixture: ComponentFixture<Comp3601Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3601Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
