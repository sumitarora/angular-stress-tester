import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4273Component } from './comp-4273.component';

describe('Comp4273Component', () => {
  let component: Comp4273Component;
  let fixture: ComponentFixture<Comp4273Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4273Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
