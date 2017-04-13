import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2830Component } from './comp-2830.component';

describe('Comp2830Component', () => {
  let component: Comp2830Component;
  let fixture: ComponentFixture<Comp2830Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2830Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2830Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
