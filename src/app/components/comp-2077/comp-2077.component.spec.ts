import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2077Component } from './comp-2077.component';

describe('Comp2077Component', () => {
  let component: Comp2077Component;
  let fixture: ComponentFixture<Comp2077Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2077Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2077Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
