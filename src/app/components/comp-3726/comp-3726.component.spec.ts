import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3726Component } from './comp-3726.component';

describe('Comp3726Component', () => {
  let component: Comp3726Component;
  let fixture: ComponentFixture<Comp3726Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3726Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3726Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
