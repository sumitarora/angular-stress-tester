import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3784Component } from './comp-3784.component';

describe('Comp3784Component', () => {
  let component: Comp3784Component;
  let fixture: ComponentFixture<Comp3784Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3784Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3784Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
