import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4145Component } from './comp-4145.component';

describe('Comp4145Component', () => {
  let component: Comp4145Component;
  let fixture: ComponentFixture<Comp4145Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4145Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
