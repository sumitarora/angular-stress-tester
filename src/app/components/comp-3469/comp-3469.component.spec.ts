import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3469Component } from './comp-3469.component';

describe('Comp3469Component', () => {
  let component: Comp3469Component;
  let fixture: ComponentFixture<Comp3469Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3469Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
