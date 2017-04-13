import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3622Component } from './comp-3622.component';

describe('Comp3622Component', () => {
  let component: Comp3622Component;
  let fixture: ComponentFixture<Comp3622Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3622Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3622Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
