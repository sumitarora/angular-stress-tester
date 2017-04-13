import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2105Component } from './comp-2105.component';

describe('Comp2105Component', () => {
  let component: Comp2105Component;
  let fixture: ComponentFixture<Comp2105Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2105Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
