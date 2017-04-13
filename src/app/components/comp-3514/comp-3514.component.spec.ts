import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3514Component } from './comp-3514.component';

describe('Comp3514Component', () => {
  let component: Comp3514Component;
  let fixture: ComponentFixture<Comp3514Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3514Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3514Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
