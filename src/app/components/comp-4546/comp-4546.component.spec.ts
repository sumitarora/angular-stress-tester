import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4546Component } from './comp-4546.component';

describe('Comp4546Component', () => {
  let component: Comp4546Component;
  let fixture: ComponentFixture<Comp4546Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4546Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4546Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
