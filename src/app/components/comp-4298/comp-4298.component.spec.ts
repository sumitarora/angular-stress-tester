import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4298Component } from './comp-4298.component';

describe('Comp4298Component', () => {
  let component: Comp4298Component;
  let fixture: ComponentFixture<Comp4298Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4298Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
