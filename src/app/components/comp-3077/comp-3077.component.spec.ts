import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3077Component } from './comp-3077.component';

describe('Comp3077Component', () => {
  let component: Comp3077Component;
  let fixture: ComponentFixture<Comp3077Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3077Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3077Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
