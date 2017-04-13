import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3857Component } from './comp-3857.component';

describe('Comp3857Component', () => {
  let component: Comp3857Component;
  let fixture: ComponentFixture<Comp3857Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3857Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3857Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
