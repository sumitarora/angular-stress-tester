import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4475Component } from './comp-4475.component';

describe('Comp4475Component', () => {
  let component: Comp4475Component;
  let fixture: ComponentFixture<Comp4475Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4475Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4475Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
