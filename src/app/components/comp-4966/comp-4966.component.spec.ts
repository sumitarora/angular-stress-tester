import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4966Component } from './comp-4966.component';

describe('Comp4966Component', () => {
  let component: Comp4966Component;
  let fixture: ComponentFixture<Comp4966Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4966Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4966Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
