import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4535Component } from './comp-4535.component';

describe('Comp4535Component', () => {
  let component: Comp4535Component;
  let fixture: ComponentFixture<Comp4535Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4535Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
