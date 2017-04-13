import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4892Component } from './comp-4892.component';

describe('Comp4892Component', () => {
  let component: Comp4892Component;
  let fixture: ComponentFixture<Comp4892Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4892Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4892Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
