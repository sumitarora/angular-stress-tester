import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2990Component } from './comp-2990.component';

describe('Comp2990Component', () => {
  let component: Comp2990Component;
  let fixture: ComponentFixture<Comp2990Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2990Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2990Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
