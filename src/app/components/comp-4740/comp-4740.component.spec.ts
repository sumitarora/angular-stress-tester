import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4740Component } from './comp-4740.component';

describe('Comp4740Component', () => {
  let component: Comp4740Component;
  let fixture: ComponentFixture<Comp4740Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4740Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4740Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
