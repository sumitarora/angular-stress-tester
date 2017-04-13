import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4226Component } from './comp-4226.component';

describe('Comp4226Component', () => {
  let component: Comp4226Component;
  let fixture: ComponentFixture<Comp4226Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4226Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
