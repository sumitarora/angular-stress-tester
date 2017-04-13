import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3812Component } from './comp-3812.component';

describe('Comp3812Component', () => {
  let component: Comp3812Component;
  let fixture: ComponentFixture<Comp3812Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3812Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3812Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
