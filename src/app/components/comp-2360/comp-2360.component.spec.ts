import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2360Component } from './comp-2360.component';

describe('Comp2360Component', () => {
  let component: Comp2360Component;
  let fixture: ComponentFixture<Comp2360Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2360Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
