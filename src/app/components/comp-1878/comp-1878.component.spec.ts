import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1878Component } from './comp-1878.component';

describe('Comp1878Component', () => {
  let component: Comp1878Component;
  let fixture: ComponentFixture<Comp1878Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1878Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1878Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
