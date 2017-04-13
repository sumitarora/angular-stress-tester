import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3967Component } from './comp-3967.component';

describe('Comp3967Component', () => {
  let component: Comp3967Component;
  let fixture: ComponentFixture<Comp3967Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3967Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3967Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
