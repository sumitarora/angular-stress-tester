import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2311Component } from './comp-2311.component';

describe('Comp2311Component', () => {
  let component: Comp2311Component;
  let fixture: ComponentFixture<Comp2311Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2311Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
