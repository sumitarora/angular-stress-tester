import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2820Component } from './comp-2820.component';

describe('Comp2820Component', () => {
  let component: Comp2820Component;
  let fixture: ComponentFixture<Comp2820Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2820Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2820Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
