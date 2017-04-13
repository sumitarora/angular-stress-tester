import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2569Component } from './comp-2569.component';

describe('Comp2569Component', () => {
  let component: Comp2569Component;
  let fixture: ComponentFixture<Comp2569Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2569Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2569Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
