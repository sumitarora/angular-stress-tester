import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2567Component } from './comp-2567.component';

describe('Comp2567Component', () => {
  let component: Comp2567Component;
  let fixture: ComponentFixture<Comp2567Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2567Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2567Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
