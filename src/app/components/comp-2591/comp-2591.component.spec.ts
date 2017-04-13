import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2591Component } from './comp-2591.component';

describe('Comp2591Component', () => {
  let component: Comp2591Component;
  let fixture: ComponentFixture<Comp2591Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2591Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
