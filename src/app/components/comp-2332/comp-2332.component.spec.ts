import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2332Component } from './comp-2332.component';

describe('Comp2332Component', () => {
  let component: Comp2332Component;
  let fixture: ComponentFixture<Comp2332Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2332Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
