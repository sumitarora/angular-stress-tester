import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2106Component } from './comp-2106.component';

describe('Comp2106Component', () => {
  let component: Comp2106Component;
  let fixture: ComponentFixture<Comp2106Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2106Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
