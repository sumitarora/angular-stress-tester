import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4860Component } from './comp-4860.component';

describe('Comp4860Component', () => {
  let component: Comp4860Component;
  let fixture: ComponentFixture<Comp4860Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4860Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4860Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
