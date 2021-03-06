import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3650Component } from './comp-3650.component';

describe('Comp3650Component', () => {
  let component: Comp3650Component;
  let fixture: ComponentFixture<Comp3650Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3650Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3650Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
