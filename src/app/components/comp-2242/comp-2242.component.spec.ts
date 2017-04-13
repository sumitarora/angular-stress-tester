import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2242Component } from './comp-2242.component';

describe('Comp2242Component', () => {
  let component: Comp2242Component;
  let fixture: ComponentFixture<Comp2242Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2242Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
