import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3075Component } from './comp-3075.component';

describe('Comp3075Component', () => {
  let component: Comp3075Component;
  let fixture: ComponentFixture<Comp3075Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3075Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3075Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
