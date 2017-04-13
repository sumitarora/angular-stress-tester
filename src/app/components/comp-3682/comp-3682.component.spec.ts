import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3682Component } from './comp-3682.component';

describe('Comp3682Component', () => {
  let component: Comp3682Component;
  let fixture: ComponentFixture<Comp3682Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3682Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3682Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
