import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2825Component } from './comp-2825.component';

describe('Comp2825Component', () => {
  let component: Comp2825Component;
  let fixture: ComponentFixture<Comp2825Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2825Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2825Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
