import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2516Component } from './comp-2516.component';

describe('Comp2516Component', () => {
  let component: Comp2516Component;
  let fixture: ComponentFixture<Comp2516Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2516Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
