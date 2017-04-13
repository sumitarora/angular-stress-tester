import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2310Component } from './comp-2310.component';

describe('Comp2310Component', () => {
  let component: Comp2310Component;
  let fixture: ComponentFixture<Comp2310Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2310Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
