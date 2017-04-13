import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2226Component } from './comp-2226.component';

describe('Comp2226Component', () => {
  let component: Comp2226Component;
  let fixture: ComponentFixture<Comp2226Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2226Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
