import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2910Component } from './comp-2910.component';

describe('Comp2910Component', () => {
  let component: Comp2910Component;
  let fixture: ComponentFixture<Comp2910Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2910Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2910Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
