import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2982Component } from './comp-2982.component';

describe('Comp2982Component', () => {
  let component: Comp2982Component;
  let fixture: ComponentFixture<Comp2982Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2982Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2982Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
