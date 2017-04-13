import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2800Component } from './comp-2800.component';

describe('Comp2800Component', () => {
  let component: Comp2800Component;
  let fixture: ComponentFixture<Comp2800Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2800Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
