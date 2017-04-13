import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4015Component } from './comp-4015.component';

describe('Comp4015Component', () => {
  let component: Comp4015Component;
  let fixture: ComponentFixture<Comp4015Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4015Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
