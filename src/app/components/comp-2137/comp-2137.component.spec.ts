import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2137Component } from './comp-2137.component';

describe('Comp2137Component', () => {
  let component: Comp2137Component;
  let fixture: ComponentFixture<Comp2137Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2137Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
