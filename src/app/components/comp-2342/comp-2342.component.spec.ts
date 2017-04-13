import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2342Component } from './comp-2342.component';

describe('Comp2342Component', () => {
  let component: Comp2342Component;
  let fixture: ComponentFixture<Comp2342Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2342Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
