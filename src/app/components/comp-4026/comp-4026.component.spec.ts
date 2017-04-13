import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4026Component } from './comp-4026.component';

describe('Comp4026Component', () => {
  let component: Comp4026Component;
  let fixture: ComponentFixture<Comp4026Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4026Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
