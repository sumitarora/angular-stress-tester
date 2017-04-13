import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2107Component } from './comp-2107.component';

describe('Comp2107Component', () => {
  let component: Comp2107Component;
  let fixture: ComponentFixture<Comp2107Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2107Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
