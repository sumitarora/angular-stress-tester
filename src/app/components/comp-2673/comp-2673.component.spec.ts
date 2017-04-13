import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2673Component } from './comp-2673.component';

describe('Comp2673Component', () => {
  let component: Comp2673Component;
  let fixture: ComponentFixture<Comp2673Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2673Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2673Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
