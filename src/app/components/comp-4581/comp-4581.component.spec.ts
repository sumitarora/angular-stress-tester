import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4581Component } from './comp-4581.component';

describe('Comp4581Component', () => {
  let component: Comp4581Component;
  let fixture: ComponentFixture<Comp4581Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4581Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4581Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
