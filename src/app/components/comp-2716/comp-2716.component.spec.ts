import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2716Component } from './comp-2716.component';

describe('Comp2716Component', () => {
  let component: Comp2716Component;
  let fixture: ComponentFixture<Comp2716Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2716Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2716Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
