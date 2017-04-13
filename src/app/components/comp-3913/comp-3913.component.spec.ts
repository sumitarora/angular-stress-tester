import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3913Component } from './comp-3913.component';

describe('Comp3913Component', () => {
  let component: Comp3913Component;
  let fixture: ComponentFixture<Comp3913Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3913Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3913Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
