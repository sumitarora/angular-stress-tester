import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2463Component } from './comp-2463.component';

describe('Comp2463Component', () => {
  let component: Comp2463Component;
  let fixture: ComponentFixture<Comp2463Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2463Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2463Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
