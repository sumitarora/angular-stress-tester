import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2401Component } from './comp-2401.component';

describe('Comp2401Component', () => {
  let component: Comp2401Component;
  let fixture: ComponentFixture<Comp2401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
