import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1443Component } from './comp-1443.component';

describe('Comp1443Component', () => {
  let component: Comp1443Component;
  let fixture: ComponentFixture<Comp1443Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1443Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1443Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
