import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2781Component } from './comp-2781.component';

describe('Comp2781Component', () => {
  let component: Comp2781Component;
  let fixture: ComponentFixture<Comp2781Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2781Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
