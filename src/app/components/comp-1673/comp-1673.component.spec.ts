import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1673Component } from './comp-1673.component';

describe('Comp1673Component', () => {
  let component: Comp1673Component;
  let fixture: ComponentFixture<Comp1673Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1673Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1673Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
