import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3690Component } from './comp-3690.component';

describe('Comp3690Component', () => {
  let component: Comp3690Component;
  let fixture: ComponentFixture<Comp3690Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3690Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3690Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
