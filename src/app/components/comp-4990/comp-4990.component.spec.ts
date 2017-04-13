import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4990Component } from './comp-4990.component';

describe('Comp4990Component', () => {
  let component: Comp4990Component;
  let fixture: ComponentFixture<Comp4990Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4990Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4990Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
