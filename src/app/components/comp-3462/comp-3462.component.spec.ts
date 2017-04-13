import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3462Component } from './comp-3462.component';

describe('Comp3462Component', () => {
  let component: Comp3462Component;
  let fixture: ComponentFixture<Comp3462Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3462Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
