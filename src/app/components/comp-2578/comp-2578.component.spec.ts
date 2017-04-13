import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2578Component } from './comp-2578.component';

describe('Comp2578Component', () => {
  let component: Comp2578Component;
  let fixture: ComponentFixture<Comp2578Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2578Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
