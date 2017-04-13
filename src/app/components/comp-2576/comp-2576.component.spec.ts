import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2576Component } from './comp-2576.component';

describe('Comp2576Component', () => {
  let component: Comp2576Component;
  let fixture: ComponentFixture<Comp2576Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2576Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
