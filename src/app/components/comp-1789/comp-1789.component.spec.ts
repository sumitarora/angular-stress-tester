import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1789Component } from './comp-1789.component';

describe('Comp1789Component', () => {
  let component: Comp1789Component;
  let fixture: ComponentFixture<Comp1789Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1789Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1789Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
