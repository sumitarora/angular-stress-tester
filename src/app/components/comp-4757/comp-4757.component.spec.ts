import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4757Component } from './comp-4757.component';

describe('Comp4757Component', () => {
  let component: Comp4757Component;
  let fixture: ComponentFixture<Comp4757Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4757Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4757Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
