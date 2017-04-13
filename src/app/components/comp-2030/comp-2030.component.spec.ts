import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2030Component } from './comp-2030.component';

describe('Comp2030Component', () => {
  let component: Comp2030Component;
  let fixture: ComponentFixture<Comp2030Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2030Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2030Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
