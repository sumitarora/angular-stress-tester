import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3969Component } from './comp-3969.component';

describe('Comp3969Component', () => {
  let component: Comp3969Component;
  let fixture: ComponentFixture<Comp3969Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3969Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3969Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
