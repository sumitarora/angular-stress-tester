import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3305Component } from './comp-3305.component';

describe('Comp3305Component', () => {
  let component: Comp3305Component;
  let fixture: ComponentFixture<Comp3305Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3305Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
