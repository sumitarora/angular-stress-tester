import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2616Component } from './comp-2616.component';

describe('Comp2616Component', () => {
  let component: Comp2616Component;
  let fixture: ComponentFixture<Comp2616Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2616Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2616Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
