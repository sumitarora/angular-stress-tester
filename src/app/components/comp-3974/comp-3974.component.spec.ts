import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3974Component } from './comp-3974.component';

describe('Comp3974Component', () => {
  let component: Comp3974Component;
  let fixture: ComponentFixture<Comp3974Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3974Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3974Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
