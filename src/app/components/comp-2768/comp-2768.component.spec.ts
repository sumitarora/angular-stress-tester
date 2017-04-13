import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2768Component } from './comp-2768.component';

describe('Comp2768Component', () => {
  let component: Comp2768Component;
  let fixture: ComponentFixture<Comp2768Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2768Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
