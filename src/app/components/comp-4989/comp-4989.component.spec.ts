import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4989Component } from './comp-4989.component';

describe('Comp4989Component', () => {
  let component: Comp4989Component;
  let fixture: ComponentFixture<Comp4989Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4989Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4989Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
