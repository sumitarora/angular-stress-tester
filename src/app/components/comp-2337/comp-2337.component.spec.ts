import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2337Component } from './comp-2337.component';

describe('Comp2337Component', () => {
  let component: Comp2337Component;
  let fixture: ComponentFixture<Comp2337Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2337Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
