import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2180Component } from './comp-2180.component';

describe('Comp2180Component', () => {
  let component: Comp2180Component;
  let fixture: ComponentFixture<Comp2180Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2180Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
