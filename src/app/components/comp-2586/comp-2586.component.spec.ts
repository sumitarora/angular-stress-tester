import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2586Component } from './comp-2586.component';

describe('Comp2586Component', () => {
  let component: Comp2586Component;
  let fixture: ComponentFixture<Comp2586Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2586Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2586Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
