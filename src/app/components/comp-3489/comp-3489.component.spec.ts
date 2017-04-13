import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3489Component } from './comp-3489.component';

describe('Comp3489Component', () => {
  let component: Comp3489Component;
  let fixture: ComponentFixture<Comp3489Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3489Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3489Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
