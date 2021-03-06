import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2160Component } from './comp-2160.component';

describe('Comp2160Component', () => {
  let component: Comp2160Component;
  let fixture: ComponentFixture<Comp2160Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2160Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
