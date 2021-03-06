import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3480Component } from './comp-3480.component';

describe('Comp3480Component', () => {
  let component: Comp3480Component;
  let fixture: ComponentFixture<Comp3480Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3480Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3480Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
