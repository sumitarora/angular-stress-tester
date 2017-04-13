import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3458Component } from './comp-3458.component';

describe('Comp3458Component', () => {
  let component: Comp3458Component;
  let fixture: ComponentFixture<Comp3458Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3458Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
